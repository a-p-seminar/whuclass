import { mkdir, readFile, writeFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";

const docs = new URL("../docs/", import.meta.url);
const destination = new URL("exercises/", docs);
const template = await readFile(new URL("exercises.html", docs), "utf8");
const definitions = await readFile(new URL("exercise-topics.js", docs), "utf8");
const ids = runInNewContext(`${definitions}\nObject.keys(courseExerciseTopics);`);
const relativeAttribute = /\b(href|src|data-course-link)="(?!#|\/|[a-z][a-z0-9+.-]*:)/gi;
const nestedTemplate = template
  .replaceAll(relativeAttribute, '$1="../')
  .replace("<!doctype html>", "<!doctype html>\n<!-- Generated from ../exercises.html. -->");

await mkdir(destination, { recursive: true });
for (const id of ids) {
  if (!/^[a-z0-9][a-z0-9_-]*$/i.test(id)) throw new Error(`Invalid exercise topic ID: ${id}`);
  const page = nestedTemplate.replace('data-page="exercises"', `data-page="exercises" data-topic="${id}"`);
  await writeFile(new URL(`${id}.html`, destination), page);
}
