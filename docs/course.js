const { overview, course, syllabus, lessonPlans, exercises } = courseContent;

const copy = {
  ...overview,
  skip: ["Skip to course content", "跳转至课程内容"],
  contents: ["Course pages", "课程页面"],
  courseAffiliation: [`${overview.title[0]}, Wuhan University`, `武汉大学 · ${overview.title[1]}`],
  homeLink: ["Course home", "课程首页"],
  syllabusTitle: ["Teaching syllabus", "教学大纲"],
  plansTitle: ["Lesson plans", "教案"],
  exercisesTitle: ["Exercises", "习题"],
  courseInformation: ["Course information", "课程基本信息"],
  learningOutcomes: ["Learning outcomes", "课程目标"],
  courseContent: ["Course content", "教学内容"],
  teachingMethod: ["Teaching method", "教学方法"],
  materialsLink: ["View course materials", "查看课件"],
  objectives: ["Learning objectives", "教学目标"],
  prep: ["Before class", "课前准备"],
  focus: ["Key points and common errors", "重点与易错点"],
  sequence: ["Teaching sequence", "课堂步骤"],
  formativeCheck: ["Check for understanding", "随堂检查"],
  expectedResponse: ["Expected response", "参考要点"],
  followUp: ["After class", "课后任务"],
  chapterExercises: ["Related exercises", "相关习题"],
  exerciseChapters: ["Exercise chapters", "习题章节"],
  team: ["Course team", "课程团队"],
  lead: ["Course leader", "课程负责人"],
  member: ["Project members", "项目成员"],
  prerequisites: ["Prerequisites", "先修知识"],
  textbooks: ["Textbooks", "教材"],
  schedule: ["Course materials", "课件"],
  topic: ["Topic", "主题"],
  materials: ["Materials", "课件"],
  open: ["Open", "打开"],
  link: ["Link", "链接"],
  download: ["Download", "下载"],
  optional: ["Optional", "选读"],
  search: ["Search materials", "查找课件"],
  unit: ["Unit", "模块"],
  all: ["All units", "全部模块"],
  searchBy: ["Topic or filename", "主题或文件名"],
  noMatch: ["No materials match the filters.", "当前条件下没有匹配的课件。"],
  solution: ["Show solution", "查看解答"],
  backToTop: ["Back to top", "返回页首"]
};

const byId = (id) => document.getElementById(id);
const page = document.body.dataset.page;
const titleKeys = { home: "title", syllabus: "syllabusTitle", plans: "plansTitle", exercises: "exercisesTitle" };
const units = new Map(course.modules.map((module) => [module.id, module]));
const materialsInReadingOrder = [...course.materials].sort((a, b) => {
  const [chapterA, sectionA] = firstSection(a.reading);
  const [chapterB, sectionB] = firstSection(b.reading);
  return chapterA - chapterB || sectionA - sectionB;
});
const firstExerciseChapter = { foundations: 1, differentiation: 3, integration: 5, series: 10 };

const scheduleRows = byId("schedule-rows");
const unitFilter = byId("unit-filter");
const search = byId("schedule-search");
const languageButton = byId("language");
let language = "en";

try {
  if (localStorage.getItem("whu-calculus-language") === "zh-CN") language = "zh-CN";
} catch {
  // Opening a local file may restrict browser storage.
}
const requestedLanguage = new URLSearchParams(location.search).get("lang");
if (requestedLanguage === "en" || requestedLanguage === "zh-CN") language = requestedLanguage;

function firstSection(reading) {
  const match = /(\d+)\.(\d+)/.exec(reading ?? "");
  return match ? [Number(match[1]), Number(match[2])] : [Number.MAX_SAFE_INTEGER, 0];
}

function formatReading(reference) {
  if (!reference || language === "en") return reference ?? "";
  const sections = reference.replace(/^§+\s*/, "").replace(/,\s*/g, "、");
  return `第 ${sections} 节`;
}

function chapterLabel(chapter) {
  return localized([`Chapter ${chapter}`, `第 ${chapter} 章`]);
}

function exerciseChapter(material) {
  const chapter = material.exerciseChapter ?? (material.reading ? firstSection(material.reading)[0] : firstExerciseChapter[material.module]);
  return exercises.some((unit) => unit.chapter === chapter) ? chapter : null;
}

function localized(values) {
  return values[language === "en" ? 0 : 1];
}

function label(key) {
  return localized(copy[key]);
}

function escapeText(text) {
  const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return text.replace(/[&<>"']/g, (character) => entities[character]);
}

function personName(person) {
  const nativeLanguage = localized(["zh-CN", "en"]);
  const otherName = localized([person.name[1], person.name[0]]);
  return `<span>${escapeText(localized(person.name))}<span class="other-name" lang="${nativeLanguage}">(${escapeText(otherName)})</span></span>`;
}

function renderStaff() {
  byId("staff").innerHTML = ["lead", "member"].map((role) => {
    const names = course.team.filter((person) => person.role === role).map(personName);
    return `<dt>${label(role)}</dt><dd>${names.join(localized([", ", "、"]))}</dd>`;
  }).join("");
}

function fileLink(item, directory = "materials") {
  const remote = /^https:\/\//i.test(item.url ?? "") ? item.url : "";
  if (!remote && !item.file) return "";
  const filename = remote ? remote.split(/[?#]/)[0].split("/").at(-1) : item.file;
  const extension = /\.(pdf|pptx?)$/i.exec(filename)?.[1].toUpperCase();
  const filePath = remote || `${directory}/${encodeURIComponent(item.file)}`;
  const href = extension === "PDF" && item.page && !filePath.includes("#") ? `${filePath}#page=${item.page}` : filePath;
  const open = Boolean(remote) || extension === "PDF";
  const behavior = open ? 'target="_blank" rel="noopener"' : "download";
  const linkText = extension ?? label("link");
  const accessibleName = escapeText(`${label(open ? "open" : "download")} ${linkText} · ${localized(item.title)}`);
  return `<a href="${escapeText(href)}" ${behavior} aria-label="${accessibleName}">${escapeText(linkText)}</a>`;
}

function renderMaterial(item) {
  let note = "";
  if (item.type === "supplement") note = label("optional");
  if (item.page) note = localized([`from p. ${item.page}`, `从第 ${item.page} 页起`]);
  const noteMarkup = note ? ` <span class="material-note">(${note})</span>` : "";
  const description = item.description ? localized(item.description) : "";
  const descriptionMarkup = description ? `<p class="material-description">${escapeText(description)}</p>` : "";
  const title = localized(item.title);
  const topic = Object.hasOwn(lessonPlans, item.id)
    ? courseLink(`lesson-plans.html#plan-${item.id}`, title, 'class="topic-link"')
    : escapeText(title);
  return `<tr class="material-row" id="material-${item.id}">
    <th scope="row" class="topic-cell">${topic}${noteMarkup}${descriptionMarkup}</th>
    <td class="materials-cell">${fileLink(item)}</td>
  </tr>`;
}

function renderSchedule() {
  const activeUnit = unitFilter.value || "all";
  const options = [{ id: "all", title: copy.all }, ...course.modules];
  unitFilter.innerHTML = options.map((item) => `<option value="${item.id}">${escapeText(localized(item.title))}</option>`).join("");
  unitFilter.value = activeUnit;
  scheduleRows.innerHTML = materialsInReadingOrder.map(renderMaterial).join("");
  updateSearch();
}

function searchKey(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f'’]/g, "");
}

function updateSearch() {
  const query = searchKey(search.value.trim());
  let visibleMaterials = 0;
  for (const item of materialsInReadingOrder) {
    const terms = [...units.get(item.module).title, ...item.title, ...(item.description ?? []), item.file, item.author, item.reading];
    const matchesUnit = unitFilter.value === "all" || unitFilter.value === item.module;
    const matches = matchesUnit && searchKey(terms.join(" ")).includes(query);
    byId(`material-${item.id}`).hidden = !matches;
    if (matches) visibleMaterials += 1;
  }
  const status = byId("search-status");
  status.hidden = !query && unitFilter.value === "all";
  status.textContent = visibleMaterials
    ? localized([`${visibleMaterials} ${visibleMaterials === 1 ? "material" : "materials"}`, `${visibleMaterials} 份课件`])
    : label("noMatch");
}

function courseLink(target, text, attributes = "") {
  return `<a href="${target}" data-course-link="${target}" ${attributes}>${escapeText(text)}</a>`;
}

function localizedItems(pairs) {
  return pairs.map((pair) => `<li>${escapeText(localized(pair))}</li>`).join("");
}

function renderTextbooks() {
  byId("textbook-list").innerHTML = course.textbooks.map((book) => `
    <li><span lang="en">${escapeText(book.authors)}. <cite>${escapeText(book.title[0])}</cite>.</span>
      ${escapeText(localized(book.edition))} ${fileLink(book, "textbooks")}
    </li>`).join("");
}

function renderSyllabus() {
  const information = syllabus.information.map((item) =>
    `<dt>${escapeText(localized(item.label))}</dt><dd>${escapeText(localized(item.value))}</dd>`
  ).join("");
  const content = course.modules.map((unit) => {
    const item = syllabus.content[unit.id];
    if (!item) return "";
    return `<div class="syllabus-unit">
      <h3>${escapeText(localized(unit.title))}</h3>
      <p>${escapeText(localized(item.topics))}</p>
      <p class="muted">${escapeText(formatReading(item.reading))}</p>
    </div>`;
  }).join("");

  byId("syllabus-content").innerHTML = `
    <section class="section">
      <h2>${label("courseInformation")}</h2>
      <dl class="course-information">${information}</dl>
    </section>
    <section class="section">
      <h2>${label("learningOutcomes")}</h2>
      <ol class="document-list">${localizedItems(syllabus.outcomes)}</ol>
    </section>
    <section class="section">
      <h2>${label("courseContent")}</h2>
      ${content}
      <p class="document-link">${courseLink("index.html#syllabus", label("materialsLink"))}</p>
    </section>
    <section class="section">
      <h2>${label("teachingMethod")}</h2>
      <ul class="document-list">${localizedItems(syllabus.teaching)}</ul>
    </section>
    <section class="section">
      <h2>${label("textbooks")}</h2>
      <ul class="plain-list" id="textbook-list"></ul>
    </section>`;
  renderTextbooks();
}

function openDetailsIn(container) {
  return new Set([...container.querySelectorAll("details[open]")].map((detail) => detail.id));
}

function lessonParagraph(key, value) {
  const separator = localized([". ", "　"]);
  return `<p><strong>${label(key)}</strong>${separator}${escapeText(localized(value))}</p>`;
}

function renderLessonPlans() {
  const container = byId("lesson-plans");
  const opened = openDetailsIn(container);
  const expandFirst = !container.hasChildNodes() && !location.hash;
  const newTab = 'target="_blank" rel="noopener"';
  const plannedMaterials = materialsInReadingOrder.filter((item) => Object.hasOwn(lessonPlans, item.id));

  container.innerHTML = plannedMaterials.map((item, index) => {
    const plan = lessonPlans[item.id];
    const id = `plan-${item.id}`;
    const open = opened.has(id) || (expandFirst && index === 0) ? " open" : "";
    const chapter = exerciseChapter(item);
    const relatedExercises = chapter ? courseLink(`exercises.html#exercise-chapter-${chapter}`, label("chapterExercises"), newTab) : "";
    const steps = plan.steps.map((step) =>
      `<li><strong>${escapeText(localized(step.title))}</strong> ${escapeText(localized(step.detail))}</li>`
    ).join("");
    return `<details class="lesson-plan" id="${id}"${open}>
      <summary>${escapeText(localized(item.title))}</summary>
      <div class="plan-content">
        <p class="plan-resources">${fileLink(item)} ${escapeText(formatReading(item.reading))}
          ${relatedExercises}
        </p>
        <h2>${label("objectives")}</h2>
        <ul class="document-list">${localizedItems(plan.objectives)}</ul>
        ${lessonParagraph("focus", plan.focus)}
        ${lessonParagraph("prep", plan.preparation)}
        <h2>${label("sequence")}</h2>
        <ol class="document-list">${steps}</ol>
        <h2>${label("formativeCheck")}</h2>
        <p>${escapeText(localized(plan.check))}</p>
        ${lessonParagraph("expectedResponse", plan.expected)}
        ${lessonParagraph("followUp", plan.followUp)}
      </div>
    </details>`;
  }).join("");
}

function renderExercises() {
  const container = byId("exercise-units");
  const opened = openDetailsIn(container);
  const chapterLinks = exercises.map(({ chapter }) =>
    `<a href="#exercise-chapter-${chapter}">${escapeText(chapterLabel(chapter))}</a>`
  ).join("");
  const exerciseMarkup = exercises.map(({ chapter, title, items }) => `<section class="section exercise-unit" id="exercise-chapter-${chapter}">
    <h2>${escapeText(chapterLabel(chapter))} · ${escapeText(localized(title))}</h2>
    <ol class="exercise-list">${items.map((item, index) => {
      const id = `solution-${chapter}-${index}`;
      return `<li>
        <span class="exercise-section">${escapeText(formatReading(`§ ${item.section}`))}</span>
        ${escapeText(localized(item.question))}
        <details class="solution" id="${id}"${opened.has(id) ? " open" : ""}>
          <summary>${label("solution")}</summary>
          <p>${escapeText(localized(item.answer))}</p>
        </details>
      </li>`;
    }).join("")}</ol>
  </section>`).join("");
  container.innerHTML = `<nav class="exercise-index" aria-label="${label("exerciseChapters")}">${chapterLinks}</nav>
    ${exerciseMarkup}`;
}

function localizeLinks() {
  for (const link of document.querySelectorAll("[data-course-link]")) {
    const [path, anchor] = link.dataset.courseLink.split("#");
    link.setAttribute("href", `${path}?lang=${language}${anchor ? `#${anchor}` : ""}`);
  }
}

function showLinkedSection() {
  const id = location.hash.slice(1);
  if (!id.startsWith("plan-") && !id.startsWith("exercise-")) return;
  const chapter = firstExerciseChapter[id.slice("exercise-".length)];
  const section = byId(id) ?? (chapter && byId(`exercise-chapter-${chapter}`));
  if (!section) return;
  if (section.classList.contains("lesson-plan")) section.open = true;
  section.scrollIntoView();
}

function renderFormulas() {
  if (typeof renderMathInElement !== "function") return;
  renderMathInElement(byId("main"), {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\[", right: "\\]", display: true },
      { left: "\\(", right: "\\)", display: false },
      { left: "$", right: "$", display: false }
    ],
    throwOnError: false,
    trust: false
  });
}

function showLanguage() {
  document.documentElement.lang = language;
  const title = label(titleKeys[page]);
  document.title = page === "home"
    ? `${title} | ${localized(["Wuhan University", "武汉大学"])}`
    : `${title} | ${label("title")}`;
  for (const node of document.querySelectorAll("[data-copy]")) node.textContent = label(node.dataset.copy);
  document.querySelector(".contents").setAttribute("aria-label", label("contents"));

  const alternate = byId("alternate-title");
  if (alternate) {
    alternate.textContent = localized([overview.title[1], overview.title[0]]);
    alternate.lang = localized(["zh-CN", "en"]);
  }
  languageButton.textContent = localized(["中文", "English"]);
  languageButton.lang = localized(["zh-CN", "en"]);
  languageButton.setAttribute("aria-label", localized(["切换至中文", "Switch to English"]));

  if (page === "home") {
    renderStaff();
    renderSchedule();
    renderTextbooks();
  }
  if (page === "syllabus") renderSyllabus();
  if (page === "plans") renderLessonPlans();
  if (page === "exercises") renderExercises();

  localizeLinks();
  renderFormulas();
  showLinkedSection();
}

unitFilter?.addEventListener("change", updateSearch);
search?.addEventListener("input", updateSearch);
window.addEventListener("hashchange", showLinkedSection);
languageButton.addEventListener("click", () => {
  language = language === "en" ? "zh-CN" : "en";
  try {
    localStorage.setItem("whu-calculus-language", language);
    const current = new URL(location.href);
    if (current.searchParams.has("lang")) {
      current.searchParams.set("lang", language);
      history.replaceState(null, "", current);
    }
  } catch {
    // The language switch still works during the current visit.
  }
  showLanguage();
});

showLanguage();
