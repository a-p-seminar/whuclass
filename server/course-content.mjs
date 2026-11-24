const prefix = 'const courseContent = ';
const suffix = ';\n';
export const MAX_CONTENT_BYTES = 1_000_000;

export class ContentValidationError extends Error {}

function fail(path, requirement) {
  throw new ContentValidationError(`${path} ${requirement}.`);
}

function object(value, path) {
  if (!value || typeof value !== 'object' || Object.getPrototypeOf(value) !== Object.prototype) {
    fail(path, 'must be an object');
  }
}

function fields(required, optional = {}) {
  const allowed = new Set([...Object.keys(required), ...Object.keys(optional)]);
  return (value, path) => {
    object(value, path);
    if (Object.keys(value).some((key) => !allowed.has(key))) fail(path, 'contains an unsupported field');
    for (const [key, check] of Object.entries(required)) {
      check(value[key], `${path}.${key}`);
    }
    for (const [key, check] of Object.entries(optional)) {
      if (Object.hasOwn(value, key)) check(value[key], `${path}.${key}`);
    }
  };
}

function listOf(check) {
  return (value, path) => {
    if (!Array.isArray(value)) fail(path, 'must be a list');
    for (let index = 0; index < value.length; index++) check(value[index], `${path}[${index}]`);
  };
}

function text(value, path) {
  if (typeof value !== 'string') fail(path, 'must be text');
}

function requiredText(value, path) {
  text(value, path);
  if (!value.trim()) fail(path, 'is required');
}

function bilingual(check) {
  return (value, path) => {
    if (!Array.isArray(value) || value.length !== 2) fail(path, 'must contain English and Chinese text');
    check(value[0], `${path} (English)`);
    check(value[1], `${path} (Chinese)`);
  };
}

const pair = bilingual(requiredText);

function id(value, path) {
  if (typeof value !== 'string' || !/^[A-Za-z0-9][A-Za-z0-9_-]{0,79}$/.test(value)
      || Object.hasOwn(Object.prototype, value) || value === 'prototype') {
    fail(path, 'must be an ID using letters, digits, hyphens, or underscores');
  }
}

function positiveInteger(value, path) {
  if (!Number.isSafeInteger(value) || value < 1) fail(path, 'must be a positive integer');
}

function choice(...choices) {
  return (value, path) => {
    if (!choices.includes(value)) fail(path, `must be ${choices.map((option) => option || 'blank').join(' or ')}`);
  };
}

function filename(value, path) {
  if (value === '') return;
  if (typeof value !== 'string' || Buffer.byteLength(value) > 255
      || !/^[\p{L}\p{N}_-][\p{L}\p{M}\p{N} _().-]*\.(?:pdf|pptx?)$/iu.test(value)
      || /^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])\./i.test(value)) {
    fail(path, 'must be a PDF, PPT, or PPTX filename without a directory');
  }
}

function httpsUrl(value, path) {
  if (value === '') return;
  const requirement = 'must be an HTTPS URL without embedded credentials';
  if (typeof value !== 'string' || !/^https:\/\//i.test(value)
      || /[\s\x00-\x1f\x7f\\<>"']/u.test(value) || !URL.canParse(value)) {
    fail(path, requirement);
  }
  const url = new URL(value);
  if (url.username || url.password) fail(path, requirement);
}

function mapOf(check) {
  return (value, path) => {
    object(value, path);
    for (const [key, entry] of Object.entries(value)) {
      id(key, `${path} key`);
      check(entry, `${path}.${key}`);
    }
  };
}

const attachment = { file: filename, url: httpsUrl };
const checkContent = fields({
  overview: fields({ title: pair, affiliation: pair, intro: pair, preparation: pair }),
  course: fields({
    modules: listOf(fields({ id, title: pair })),
    materials: listOf(fields({ id, module: id, title: pair }, {
      ...attachment,
      description: bilingual(text),
      author: text,
      reading: text,
      type: choice('supplement', ''),
      page: positiveInteger,
      exerciseChapter: positiveInteger,
    })),
    textbooks: listOf(fields({ id, authors: requiredText, title: pair, edition: pair }, attachment)),
    team: listOf(fields({ name: pair, role: choice('lead', 'member') })),
  }),
  syllabus: fields({
    information: listOf(fields({ label: pair, value: pair })),
    outcomes: listOf(pair),
    content: mapOf(fields({ topics: pair }, { reading: text })),
    teaching: listOf(pair),
  }),
  lessonPlans: mapOf(fields({
    objectives: listOf(pair),
    focus: pair,
    preparation: pair,
    steps: listOf(fields({ title: pair, detail: pair })),
    check: pair,
    expected: pair,
    followUp: pair,
  })),
  exercises: listOf(fields({
    chapter: positiveInteger,
    title: pair,
    items: listOf(fields({ section: requiredText, question: pair, answer: pair })),
  })),
});

function uniqueKeys(items, key, path) {
  const keys = new Set(items.map((item) => item[key]));
  if (keys.size !== items.length) fail(path, `contains a duplicate ${key}`);
  return keys;
}

function validateCourseContent(content) {
  checkContent(content, 'content');
  const { course, syllabus, lessonPlans, exercises } = content;
  const modules = uniqueKeys(course.modules, 'id', 'content.course.modules');
  const materials = uniqueKeys(course.materials, 'id', 'content.course.materials');
  const chapters = uniqueKeys(exercises, 'chapter', 'content.exercises');
  uniqueKeys(course.textbooks, 'id', 'content.course.textbooks');

  course.materials.forEach((material, index) => {
    const path = `content.course.materials[${index}]`;
    if (!modules.has(material.module)) fail(`${path}.module`, 'must reference an existing module');
    if (material.exerciseChapter !== undefined && !chapters.has(material.exerciseChapter)) {
      fail(`${path}.exerciseChapter`, 'must reference an existing exercise chapter');
    }
  });
  if (Object.keys(syllabus.content).some((key) => !modules.has(key))) {
    fail('content.syllabus.content', 'contains an unknown module ID');
  }
  if (Object.keys(lessonPlans).some((key) => !materials.has(key))) {
    fail('content.lessonPlans', 'contains an unknown material ID');
  }
  return content;
}

function checkSize(source) {
  if (Buffer.byteLength(source) > MAX_CONTENT_BYTES) {
    throw new ContentValidationError('The course content file must fit within 1 MB.');
  }
}

export function parseCourseContent(source) {
  checkSize(source);
  if (!source.startsWith(prefix) || !source.endsWith(suffix)) {
    throw new ContentValidationError('The course content file must use the courseContent JSON wrapper.');
  }
  let content;
  try {
    content = JSON.parse(source.slice(prefix.length, -suffix.length));
  } catch {
    throw new ContentValidationError('The course content file contains invalid JSON.');
  }
  return validateCourseContent(content);
}

export function serializeCourseContent(content) {
  const source = `${prefix}${JSON.stringify(validateCourseContent(content), null, 2)}${suffix}`;
  checkSize(source);
  return source;
}
