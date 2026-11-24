(() => {
  "use strict";

  const sections = [
    ["modules", "课程章节", renderModules],
    ["home", "首页信息", renderOverview],
    ["books", "教材与团队", renderBooksAndTeam],
    ["syllabus", "教学大纲", renderSyllabus],
    ["plans", "教案", renderPlans],
    ["exercises", "习题", renderExercises]
  ];
  const panels = new Map();
  const stalePanels = new Set();
  let pendingEntries = new WeakSet();

  const byId = (id) => document.getElementById(id);
  const ui = {
    toolbar: byId("toolbar"),
    save: byId("save"),
    logout: byId("logout"),
    publication: byId("publication"),
    destination: byId("destination"),
    editorStatus: byId("editor-status"),
    commitLink: byId("commit-link"),
    conflictActions: byId("conflict-actions"),
    download: byId("download-draft"),
    reload: byId("reload-content"),
    loading: byId("loading"),
    loadStatus: byId("load-status"),
    retry: byId("retry-load"),
    login: byId("login"),
    loginForm: byId("login-form"),
    password: byId("password"),
    loginStatus: byId("login-status"),
    signIn: byId("sign-in"),
    editor: byId("editor"),
    nav: byId("section-nav"),
    fields: byId("editing-fields")
  };

  const state = {
    active: "modules",
    content: null,
    sha: "",
    saved: "",
    dirty: false,
    conflict: false,
    busy: false
  };

  function element(tag, className, ...children) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.append(...children);
    return node;
  }

  function button(label, action, className = "button") {
    const node = element("button", className, label);
    node.type = "button";
    node.addEventListener("click", action);
    return node;
  }

  const blankPair = () => ["", ""];
  const localized = (pair, fallback) => pair?.[1]?.trim() || pair?.[0]?.trim() || fallback;

  function excerpt(pair, fallback) {
    const text = localized(pair, fallback).replace(/\s+/g, " ");
    return text.length > 62 ? text.slice(0, 61) + "…" : text;
  }

  function disclosure(title, open = false) {
    const summary = element("summary", "", title);
    const body = element("div", "record-body");
    const node = element("details", "record", summary, body);
    node.open = open;
    return { node, summary, body };
  }

  function focusNewRecord(node) {
    if (node.tagName === "DETAILS") node.open = true;
    node.querySelector("input, textarea, select")?.focus();
  }

  let nextHint = 0;

  function field(label, { value = "", type = "text", multiline = false, required = false,
    hint, lang, format, options, validationLabel = label, onInput }) {
    const wrapper = element("label", "field", element("span", "field-label", label));
    const control = element(options ? "select" : multiline ? "textarea" : "input", "");
    if (options) {
      for (const [optionValue, caption] of options) {
        const option = element("option", "", caption);
        option.value = optionValue;
        control.append(option);
      }
    } else if (multiline) {
      control.rows = 3;
    } else {
      control.type = type;
    }
    if (type === "number") {
      control.min = "1";
      control.step = "1";
    }
    if (lang) control.lang = lang;
    if (format) control.dataset.format = format;
    control.dataset.field = validationLabel;
    control.required = required;
    control.value = value;
    wrapper.append(control);
    if (hint) {
      const note = element("span", "field-hint", hint);
      note.id = `field-hint-${++nextHint}`;
      control.setAttribute("aria-describedby", note.id);
      wrapper.append(note);
    }
    control.addEventListener(options ? "change" : "input", () => {
      control.setCustomValidity("");
      onInput(control.value);
      markDirty();
    });
    return wrapper;
  }

  function pairField(record, key, label, { multiline = false, required = true, onEdit } = {}) {
    const columns = element("div", "field-grid");
    for (const [language, lang, index] of [["中文", "zh-CN", 1], ["English", "en", 0]]) {
      columns.append(field(language, {
        value: record[key]?.[index] ?? "",
        lang, multiline, required, validationLabel: `${label}（${language}）`,
        onInput(value) {
          const pair = record[key] ?? blankPair();
          pair[index] = value;
          if (required || pair.some((text) => text.trim())) {
            record[key] = pair;
          } else {
            delete record[key];
          }
          onEdit?.(pair);
        }
      }));
    }
    return element("fieldset", "pair", element("legend", "", label), columns);
  }

  function propertyField(record, key, label, options = {}) {
    return field(label, {
      ...options,
      value: record[key] ?? "",
      onInput(value) {
        if (options.format) value = value.trim();
        if (!value && !options.required) {
          delete record[key];
        } else {
          record[key] = options.type === "number" ? Number(value) : value;
        }
        options.onEdit?.();
      }
    });
  }

  function sourceFields(record, label) {
    return element("div", "field-grid",
      propertyField(record, "url", `${label}链接（选填）`, {
        type: "url", format: "https", hint: "填写 HTTPS 链接。课程页优先使用此链接。"
      }),
      propertyField(record, "file", "仓库文件名（选填）", {
        format: "filename", hint: "填写仓库中已有的 PDF、PPT 或 PPTX 文件名。"
      })
    );
  }

  function setDirty(dirty) {
    if (dirty === state.dirty) return;
    state.dirty = dirty;
    if (dirty) window.addEventListener("beforeunload", confirmNavigation);
    else window.removeEventListener("beforeunload", confirmNavigation);
    syncButtons();
  }

  function confirmNavigation(event) {
    event.preventDefault();
    event.returnValue = true;
  }

  function markDirty() {
    setDirty(true);
    if (!state.conflict) setStatus("有未保存的修改。");
  }

  function checkAfterUndo() {
    setDirty(JSON.stringify(state.content) !== state.saved);
    if (!state.conflict) setStatus(state.dirty ? "有未保存的修改。" : "内容已与 GitHub 同步。");
  }

  function undoButton(action) {
    return button("撤销添加", action, "button quiet undo-addition");
  }

  function listEditor({
    title, items, addLabel, create, render, emptyMessage, matches = () => true, onUndo
  }) {
    const list = element("div", "list-records");
    const empty = element("p", "empty-message", emptyMessage ?? "暂无内容。");
    const add = button(addLabel, () => {
      const record = create();
      items.push(record);
      pendingEntries.add(record);
      focusNewRecord(appendRecord(record, list.children.length));
      markDirty();
    });

    function appendRecord(record, index) {
      const node = render(record, index);
      if (pendingEntries.has(record)) {
        const body = node.tagName === "DETAILS" ? node.lastElementChild : node;
        body.append(undoButton(() => {
          items.splice(items.indexOf(record), 1);
          pendingEntries.delete(record);
          node.remove();
          empty.hidden = Boolean(list.firstElementChild);
          onUndo?.(record);
          checkAfterUndo();
          add.focus();
        }));
      }
      list.append(node);
      empty.hidden = true;
      return node;
    }

    items.filter(matches).forEach(appendRecord);
    const heading = element("div", "list-heading", element("h3", "", title), add);
    return element("section", "list-editor", heading, list, empty);
  }

  function mapEditor(records, key, addLabel, create, render) {
    const container = element("div", "fieldset-content");
    const add = button(addLabel, () => {
      const record = create();
      records[key] = record;
      pendingEntries.add(record);
      showRecord();
      focusNewRecord(container);
      markDirty();
    });

    function showRecord() {
      if (!Object.hasOwn(records, key)) {
        container.replaceChildren(element("div", "actions", add));
        return;
      }

      const record = records[key];
      container.replaceChildren(render(record));
      if (pendingEntries.has(record)) {
        container.append(undoButton(() => {
          delete records[key];
          pendingEntries.delete(record);
          showRecord();
          checkAfterUndo();
          add.focus();
        }));
      }
    }

    showRecord();
    return container;
  }

  function nextId(prefix) {
    const { modules, materials, textbooks } = state.content.course;
    const ids = new Set([...modules, ...materials, ...textbooks].map((item) => item.id));
    let index = 1;
    while (ids.has(`${prefix}-${index}`)) index++;
    return `${prefix}-${index}`;
  }

  function invalidatePanels(...ids) {
    ids.forEach((id) => stalePanels.add(id));
  }

  function renderModules() {
    const { course, syllabus, lessonPlans } = state.content;
    return listEditor({
      title: "章节", items: course.modules, addLabel: "添加章节", emptyMessage: "还没有章节。",
      create() {
        invalidatePanels("syllabus", "plans");
        return { id: nextId("section"), title: blankPair() };
      },
      render: (record, index) => renderModule(record, index, course.materials),
      onUndo(record) {
        for (let index = course.materials.length - 1; index >= 0; index--) {
          const material = course.materials[index];
          if (material.module === record.id) {
            delete lessonPlans[material.id];
            course.materials.splice(index, 1);
          }
        }
        delete syllabus.content[record.id];
        invalidatePanels("syllabus", "plans");
      }
    });
  }

  function renderModule(record, index, materials) {
    const title = () => localized(record.title, "新章节");
    const { node, summary, body } = disclosure(title(), index === 0);
    body.append(
      pairField(record, "title", "章节标题", {
        onEdit() {
          summary.textContent = title();
          invalidatePanels("syllabus", "plans");
        }
      }),
      listEditor({
        title: "主题", items: materials, matches: (topic) => topic.module === record.id,
        addLabel: "添加主题", emptyMessage: "本章还没有主题。",
        create() {
          invalidatePanels("plans");
          return { id: nextId("topic"), module: record.id, title: blankPair() };
        },
        render: renderTopic,
        onUndo(topic) {
          delete state.content.lessonPlans[topic.id];
          invalidatePanels("plans");
        }
      })
    );
    return node;
  }

  function renderTopic(record) {
    const title = () => localized(record.title, "新主题");
    const { node, summary, body } = disclosure(title());
    body.append(
      pairField(record, "title", "主题标题", {
        onEdit() {
          summary.textContent = title();
          invalidatePanels("plans");
        }
      }),
      sourceFields(record, "课件"),
      pairField(record, "description", "主题说明（选填）", { multiline: true, required: false }),
      element("div", "field-grid",
        propertyField(record, "author", "课件作者（选填）"),
        propertyField(record, "reading", "教材阅读范围（选填）"),
        propertyField(record, "type", "课件类型", {
          options: [["", "常规课件"], ["supplement", "补充阅读"]]
        }),
        propertyField(record, "page", "PDF 起始页（选填）", { type: "number" }),
        propertyField(record, "exerciseChapter", "关联习题章号（选填）", { type: "number", format: "chapter" })
      )
    );
    return node;
  }

  function renderOverview() {
    const { overview } = state.content;
    return element("div", "fieldset-content",
      pairField(overview, "title", "课程名称"),
      pairField(overview, "affiliation", "开课单位"),
      pairField(overview, "intro", "课程简介", { multiline: true }),
      pairField(overview, "preparation", "先修知识", { multiline: true })
    );
  }

  function renderBooksAndTeam() {
    const { textbooks, team } = state.content.course;
    return element("div", "fieldset-content",
      listEditor({
        title: "教材", items: textbooks, addLabel: "添加教材",
        create: () => ({ id: nextId("book"), title: blankPair(), authors: "", edition: blankPair() }),
        render(record) {
          const title = () => localized(record.title, "新教材");
          const { node, summary, body } = disclosure(title());
          body.append(
            pairField(record, "title", "书名", { onEdit: () => { summary.textContent = title(); } }),
            propertyField(record, "authors", "作者", { required: true }),
            pairField(record, "edition", "版次"),
            sourceFields(record, "教材")
          );
          return node;
        }
      }),
      listEditor({
        title: "课程团队", items: team, addLabel: "添加成员",
        create: () => ({ name: blankPair(), role: "member" }),
        render(record) {
          const title = () => localized(record.name, "新成员");
          const { node, summary, body } = disclosure(title());
          body.append(
            pairField(record, "name", "姓名", { onEdit: () => { summary.textContent = title(); } }),
            propertyField(record, "role", "团队角色", {
              required: true, options: [["member", "团队成员"], ["lead", "课程负责人"]]
            })
          );
          return node;
        }
      })
    );
  }

  function pairList(items, title, addLabel, singular) {
    return listEditor({
      title, items, addLabel, create: blankPair,
      render(pair) {
        const title = () => excerpt(pair, singular);
        const { node, summary, body } = disclosure(title());
        body.append(pairField({ value: pair }, "value", singular, {
          multiline: true, onEdit: () => { summary.textContent = title(); }
        }));
        return node;
      }
    });
  }

  function renderSyllabus() {
    const { syllabus, course } = state.content;
    const units = element("section", "record-group", element("h3", "", "各章教学内容"));
    for (const module of course.modules) {
      const { node, body } = disclosure(localized(module.title, "新章节"));
      body.append(mapEditor(syllabus.content, module.id, "添加章节大纲",
        () => ({ topics: blankPair() }),
        (record) => element("div", "fieldset-content",
          pairField(record, "topics", "教学内容", { multiline: true }),
          propertyField(record, "reading", "教材阅读范围（选填）")
        )
      ));
      units.append(node);
    }
    if (!course.modules.length) units.append(element("p", "empty-message", "添加课程章节后可编写各章大纲。"));

    return element("div", "fieldset-content",
      listEditor({
        title: "课程信息", items: syllabus.information, addLabel: "添加信息",
        create: () => ({ label: blankPair(), value: blankPair() }),
        render(record) {
          const title = () => localized(record.label, "新条目");
          const { node, summary, body } = disclosure(title());
          body.append(
            pairField(record, "label", "名称", { onEdit: () => { summary.textContent = title(); } }),
            pairField(record, "value", "内容", { multiline: true })
          );
          return node;
        }
      }),
      pairList(syllabus.outcomes, "学习目标", "添加学习目标", "学习目标"),
      units,
      pairList(syllabus.teaching, "教学安排", "添加教学安排", "教学安排")
    );
  }

  function renderPlans() {
    const { course, lessonPlans } = state.content;
    const container = element("div", "fieldset-content");
    for (const module of course.modules) {
      const group = element("section", "record-group", element("h3", "", localized(module.title, "新章节")));
      const topics = course.materials.filter((topic) => topic.module === module.id);
      for (const topic of topics) {
        const { node, body } = disclosure(localized(topic.title, "新主题"));
        body.append(mapEditor(lessonPlans, topic.id, "添加教案", () => ({
          objectives: [], focus: blankPair(), preparation: blankPair(), steps: [],
          check: blankPair(), expected: blankPair(), followUp: blankPair()
        }), renderPlanFields));
        group.append(node);
      }
      if (!topics.length) group.append(element("p", "empty-message", "添加主题后可编写教案。"));
      container.append(group);
    }
    if (!course.modules.length) container.append(element("p", "empty-message", "添加课程章节和主题后可编写教案。"));
    return container;
  }

  function renderPlanFields(record) {
    return element("div", "fieldset-content",
      pairList(record.objectives, "教学目标", "添加教学目标", "教学目标"),
      pairField(record, "focus", "教学重点", { multiline: true }),
      pairField(record, "preparation", "课前准备", { multiline: true }),
      listEditor({
        title: "教学步骤", items: record.steps, addLabel: "添加教学步骤",
        create: () => ({ title: blankPair(), detail: blankPair() }),
        render(step) {
          const title = () => localized(step.title, "新步骤");
          const { node, summary, body } = disclosure(title());
          body.append(
            pairField(step, "title", "步骤标题", { onEdit: () => { summary.textContent = title(); } }),
            pairField(step, "detail", "步骤说明", { multiline: true })
          );
          return node;
        }
      }),
      pairField(record, "check", "随堂检查", { multiline: true }),
      pairField(record, "expected", "参考答案", { multiline: true }),
      pairField(record, "followUp", "课后任务", { multiline: true })
    );
  }

  function renderExercises() {
    const { exercises } = state.content;
    return element("div", "fieldset-content",
      element("p", "hint", String.raw`公式可直接输入 LaTeX，例如 \(x^2\)。`),
      listEditor({
        title: "习题章节", items: exercises, addLabel: "添加习题章节",
        create: () => ({
          chapter: Math.max(0, ...exercises.map((record) => record.chapter)) + 1,
          title: blankPair(), items: []
        }),
        render(record) {
          const title = () => {
            const name = localized(record.title, "");
            return `第 ${record.chapter} 章${name ? " · " + name : ""}`;
          };
          const { node, summary, body } = disclosure(title());
          body.append(
            pairField(record, "title", "章节标题", { onEdit: () => { summary.textContent = title(); } }),
            listEditor({
              title: "习题", items: record.items, addLabel: "添加习题",
              create: () => ({ section: "", question: blankPair(), answer: blankPair() }),
              render: renderExercise
            })
          );
          return node;
        }
      })
    );
  }

  function renderExercise(record) {
    const title = () => [record.section, excerpt(record.question, "新习题")].filter(Boolean).join(" · ");
    const { node, summary, body } = disclosure(title());
    const onEdit = () => { summary.textContent = title(); };
    body.append(
      propertyField(record, "section", "小节编号", { required: true, hint: "例如 1.1。", onEdit }),
      pairField(record, "question", "题目", { multiline: true, onEdit }),
      pairField(record, "answer", "解答", { multiline: true })
    );
    return node;
  }

  function initializePanels() {
    panels.clear();
    stalePanels.clear();
    ui.nav.replaceChildren();
    ui.fields.replaceChildren();
    for (const [id, label, render] of sections) {
      const heading = element("h2", "", label);
      heading.id = `heading-${id}`;
      heading.tabIndex = -1;
      const panel = element("section", "editor-panel", heading);
      panel.id = `editor-${id}`;
      panel.dataset.section = id;
      panel.setAttribute("aria-labelledby", heading.id);
      panel.hidden = true;
      const nav = button(label, () => activatePanel(id, true), "nav-button");
      nav.setAttribute("aria-controls", panel.id);
      ui.nav.append(nav);
      ui.fields.append(panel);
      panels.set(id, { panel, heading, nav, render });
      stalePanels.add(id);
    }
    activatePanel(state.active);
  }

  function ensurePanel(id) {
    const { panel, heading, render } = panels.get(id);
    if (stalePanels.delete(id)) panel.replaceChildren(heading, render());
  }

  function activatePanel(id, focus = false) {
    ensurePanel(id);
    state.active = id;
    for (const [key, entry] of panels) {
      entry.panel.hidden = key !== id;
      if (key === id) entry.nav.setAttribute("aria-current", "page");
      else entry.nav.removeAttribute("aria-current");
    }
    if (focus) panels.get(id).heading.focus();
  }

  function httpsUrl(raw) {
    try {
      if (!/^https:\/\//i.test(raw) || /[\s\\<>"']/u.test(raw)) return null;
      const url = new URL(raw);
      return url.hostname && !url.username && !url.password ? url : null;
    } catch {
      return null;
    }
  }

  function validFilename(value) {
    return new TextEncoder().encode(value).length <= 255
      && /^[\p{L}\p{N}_-][\p{L}\p{M}\p{N} _().-]*\.(pdf|pptx?)$/iu.test(value)
      && !/^(?:CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])\./i.test(value);
  }

  function validate() {
    for (const id of panels.keys()) ensurePanel(id);
    for (const control of ui.fields.querySelectorAll("input, textarea, select")) {
      control.setCustomValidity("");
      const value = control.value.trim();
      const label = control.dataset.field;
      if (control.validity.badInput) {
        control.setCustomValidity(`请填写有效的${label}。`);
      } else if (control.required && !value) {
        control.setCustomValidity(`请填写${label}。`);
      } else if (value && control.dataset.format === "https" && !httpsUrl(value)) {
        control.setCustomValidity("请填写有效的 HTTPS 链接。");
      } else if (value && control.dataset.format === "filename" && !validFilename(value)) {
        control.setCustomValidity("请填写 PDF、PPT 或 PPTX 文件名。");
      } else if (value && control.type === "number" && (!Number.isSafeInteger(Number(value)) || Number(value) < 1)) {
        control.setCustomValidity(`请为${label}填写正整数。`);
      } else if (value && control.dataset.format === "chapter"
          && !state.content.exercises.some((entry) => entry.chapter === Number(value))) {
        control.setCustomValidity("请填写习题页已有的章号。");
      }
      if (control.validity.valid) continue;

      activatePanel(control.closest(".editor-panel").dataset.section);
      for (let entry = control.closest("details"); entry; entry = entry.parentElement.closest("details")) {
        entry.open = true;
      }
      setStatus(control.validationMessage, "error");
      control.focus();
      control.reportValidity();
      return false;
    }
    return true;
  }

  class ApiError extends Error {
    constructor(status, message) {
      super(message);
      this.status = status;
    }
  }

  async function request(path, method = "GET", payload) {
    const response = await fetch(`/admin/api/${path}`, {
      method,
      credentials: "same-origin",
      redirect: "error",
      cache: "no-store",
      headers: payload === undefined ? undefined : { "Content-Type": "application/json" },
      body: payload === undefined ? undefined : JSON.stringify(payload)
    });
    if (response.status === 204) return null;
    const data = await response.json().catch(() => null);
    if (!response.ok) throw new ApiError(response.status, data?.message);
    if (!data) throw new Error("服务器返回的课程数据无法读取。");
    return data;
  }

  function messageFor(error, fallback) {
    return error instanceof ApiError && error.message ? error.message : fallback;
  }

  function updateMessage(node, message, status = "") {
    if (node.textContent !== message) node.textContent = message;
    node.dataset.status = status;
  }

  function setStatus(message, status = "") {
    updateMessage(ui.editorStatus, message, status);
    ui.conflictActions.hidden = !state.conflict;
    ui.commitLink.textContent = status === "success" ? "查看提交" : "查看上次提交";
  }

  function showConflict() {
    state.conflict = true;
    setStatus("GitHub 上已有更新。可以下载当前草稿，再加载最新版本。", "error");
  }

  function syncButtons() {
    ui.fields.disabled = state.busy;
    ui.save.disabled = state.busy || !state.dirty || state.conflict;
    for (const node of [ui.logout, ui.signIn, ui.retry, ui.download, ui.reload]) {
      node.disabled = state.busy;
    }
  }

  function setBusy(busy) {
    state.busy = busy;
    syncButtons();
  }

  function editorVisibility(visible) {
    for (const node of [ui.editor, ui.toolbar, ui.publication]) node.hidden = !visible;
  }

  function showLogin(message = "") {
    editorVisibility(false);
    ui.loading.hidden = true;
    ui.login.hidden = false;
    updateMessage(ui.loginStatus, message);
    ui.password.focus();
  }

  function showEditor() {
    ui.login.hidden = true;
    ui.loading.hidden = true;
    editorVisibility(true);
  }

  function updateCommitLink(commitUrl) {
    const url = httpsUrl(commitUrl);
    const valid = url?.host === "github.com" && /^\/[^/]+\/[^/]+\/commit\/[a-f\d]{7,64}\/?$/i.test(url.pathname);
    if (valid) ui.commitLink.href = url.href;
    else ui.commitLink.removeAttribute("href");
    ui.commitLink.hidden = !valid;
  }

  async function loadContent() {
    setBusy(true);
    const cached = Boolean(state.content);
    if (!cached) {
      ui.login.hidden = true;
      ui.loading.hidden = false;
      ui.retry.hidden = true;
      updateMessage(ui.loadStatus, "正在读取课程内容…");
    } else {
      setStatus("正在读取最新版本…");
    }

    try {
      const data = await request("content");
      if (!data?.content || typeof data.sha !== "string" || !data.sha) throw new Error("Invalid course response");
      state.content = data.content;
      state.sha = data.sha;
      state.saved = JSON.stringify(data.content);
      state.conflict = false;
      setDirty(false);
      pendingEntries = new WeakSet();
      initializePanels();
      ui.destination.textContent = [data.repository, data.branch].filter(Boolean).join(" · ");
      updateCommitLink();
      setStatus("内容已与 GitHub 同步。");
      showEditor();
    } catch (error) {
      if (error.status === 401) {
        showLogin(state.dirty ? "登录已过期。重新登录后可继续编辑当前草稿。" : "");
      } else if (cached) {
        setStatus(messageFor(error, "未能加载最新版本。当前内容仍可查看。"), "error");
      } else {
        updateMessage(ui.loadStatus, messageFor(error, "无法加载课程内容，请重试。"), "error");
        ui.retry.hidden = false;
      }
    } finally {
      setBusy(false);
    }
  }

  async function login(event) {
    event.preventDefault();
    if (state.busy) return;
    const password = ui.password.value;
    ui.password.value = "";
    setBusy(true);
    updateMessage(ui.loginStatus, "正在登录…");
    try {
      await request("login", "POST", { password });
      if (state.dirty) {
        showEditor();
        if (state.conflict) showConflict();
        else setStatus("已重新登录，可以继续编辑当前草稿。");
      } else {
        await loadContent();
      }
    } catch (error) {
      const message = error.status === 401 ? "密码有误，请重试。"
        : error.status === 429 ? "尝试次数过多，请稍后再试。"
        : messageFor(error, "登录失败，请重试。");
      updateMessage(ui.loginStatus, message, "error");
      ui.password.focus();
    } finally {
      setBusy(false);
    }
  }

  async function save() {
    if (state.busy || !state.dirty || state.conflict || !validate()) return;
    const snapshot = JSON.stringify(state.content);
    if (snapshot === state.saved) {
      setDirty(false);
      setStatus("内容已与 GitHub 同步。");
      return;
    }

    setBusy(true);
    setStatus("正在保存到 GitHub…");
    try {
      const result = await request("content", "PUT", { content: state.content, sha: state.sha });
      if (typeof result?.sha !== "string" || !result.sha) throw new Error("Invalid save response");
      state.sha = result.sha;
      state.saved = snapshot;
      setDirty(false);
      pendingEntries = new WeakSet();
      ui.fields.querySelectorAll(".undo-addition").forEach((node) => node.remove());
      updateCommitLink(result.commitUrl);
      setStatus("已保存到 GitHub。", "success");
    } catch (error) {
      if (error.status === 401) {
        showLogin("登录已过期。重新登录后可继续编辑当前草稿。");
      } else if (error.status === 409) {
        showConflict();
      } else {
        setStatus(messageFor(error, "保存失败，当前草稿仍在此页。请重试。"), "error");
      }
    } finally {
      setBusy(false);
    }
  }

  function clearSession() {
    setDirty(false);
    state.content = null;
    state.sha = "";
    state.saved = "";
    state.conflict = false;
    state.active = "modules";
    pendingEntries = new WeakSet();
    panels.clear();
    ui.fields.replaceChildren();
    ui.nav.replaceChildren();
    updateCommitLink();
    showLogin();
  }

  async function logout() {
    if (state.busy || (state.dirty && !window.confirm("退出登录会丢弃此页的草稿。继续退出？"))) return;
    setBusy(true);
    try {
      await request("logout", "POST", {});
      clearSession();
    } catch (error) {
      if (error.status === 401) clearSession();
      else setStatus(messageFor(error, "退出失败，请重试。"), "error");
    } finally {
      setBusy(false);
    }
  }

  function downloadDraft() {
    const blob = new Blob([JSON.stringify(state.content, null, 2) + "\n"], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = element("a", "");
    link.href = url;
    link.download = "course-content-draft.json";
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  ui.loginForm.addEventListener("submit", login);
  ui.save.addEventListener("click", save);
  ui.logout.addEventListener("click", logout);
  ui.retry.addEventListener("click", loadContent);
  ui.download.addEventListener("click", downloadDraft);
  ui.reload.addEventListener("click", () => {
    if (window.confirm("加载最新版本会替换此页的草稿。继续加载？")) loadContent();
  });

  loadContent();
})();
