# whuclass

武汉大学《高等数学》课程网站。 [课程首页](https://a-p-seminar.github.io/whuclass/)

双击 `docs/index.html` 可以直接预览。网站默认使用英文，页眉可切换中文。移动或打包时请带上整个 `docs` 目录。课件和 LaTeX 渲染所需文件都在 `docs` 目录中。

- `docs/syllabus.html` 列出课程目标、四个教学模块、教材章节和教学方法。
- `docs/lesson-plans.html` 为 14 份课件各配一份教案。首页课件表的主题链接跳到对应教案，打开后可查看预习、课堂步骤、随堂检查和课后任务。
- 课件表的「习题」链接打开 `docs/exercises/` 中对应的主题页。页面左侧可切换主题，每道题附可展开的参考解答。修改共用模板 `docs/exercises.html` 后，运行 `node scripts/build-exercise-pages.mjs` 更新主题页。

## 管理后台

后台可以修改课程信息、团队、教材、教学大纲、教案和习题，也可以新增板块并在板块下添加 Topic。中英文各有输入项。Topic 可填写说明、关联仓库中已有的课件文件，或添加 HTTPS 链接。

1. 将 `ADMIN_PASSWORD` 配置为此仓库的 Codespaces Secret，然后打开 **Code → Codespaces**，启动仓库的工作区。Codespaces 会为当前仓库提供 `GITHUB_TOKEN`。
2. 打开 **Ports** 中的 **8788** 私有端口。根路径 `/` 是课程站，`/admin/` 是编辑入口。Codespace 运行期间可访问。
3. 登录后选择板块，编辑或新增内容，再点「保存到 GitHub」。保存成功会显示提交链接。遇到并发更新时，请复制当前草稿中的改动，重新加载 GitHub 版本后再合并保存。

也可以在本地使用 Node.js 22 或更新版本。复制 `.env.example` 为 `.env`，填写 `ADMIN_PASSWORD` 以及该仓库的读写令牌 `GITHUB_TOKEN`，运行 `node --env-file=.env server/start.mjs`，然后打开 `http://127.0.0.1:8788/admin/`。令牌需要此仓库的 **Contents: Read and write** 权限。`.env` 由 Git 忽略。使用 `node --test` 运行后台测试。

网页和后台共用 `docs/course-content.js`。后台校验内容版本后提交到 `main`。GitHub Pages 从 `main` 的 `/docs` 目录发布，每次提交后会重新部署。后台服务器中的课程预览直接读取 GitHub 上的最新版本。

## 课程编排

首版选取 *Thomas’ Calculus* 第 14 版对应的一元微积分基础内容。教学大纲涵盖函数与极限、导数及其应用、积分及其应用、数列与级数四个模块。课件表和教案按对应教材节号排列，以每份课件的首个阅读节号为排序依据。无对应节号的选读放在末尾。

课程说明参考了高校大纲中列目标、先修知识和教学主题的写法。 [中国科学院大学 Calculus I (A) 大纲](https://english.ucas.edu.cn/index.php/admission/undergraduate/course-syllabuses/616-school-of-mathematical-sciences/4478-syllabus-calculus-i-a)

网页采用单栏正文，课件表在同一行呈现主题和课件链接。 [Harvard CS 2824 课程页](https://harvard-cs2824-s26.github.io/2027/)

页首使用武汉大学标准双色校徽。背景为 Howchou 拍摄的武汉大学老图书馆照片，依照 CC BY-SA 3.0 使用，页眉内以低透明度裁切显示。 [武汉大学官方标识](https://www.whu.edu.cn/xxgk/wdbs.htm) · [老图书馆照片](https://commons.wikimedia.org/wiki/File:Wuhan_University_Old_Library.jpg) · [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)

## 课件与公式

- `docs/materials/` 收录 14 份现有课件副本，文件名采用 `YYMMDD_标题.扩展名`。日期取课件封面，例如 `261031_The-Derivative-of-Functions.pdf`。
- `A Primer of Power Series` 是历史讲义，学习内容从第 3 页开始。
- 首页的「PDF」可下载教材原件，文件作为仓库的 Release 附件发布。 [教材 PDF](https://github.com/a-p-seminar/whuclass/releases/tag/textbooks)
- 新课件可用同一命名规则放进 `docs/materials/` 并提交到 GitHub，再在相应板块的 Topic 填入课件文件名。`.pptx` 和 `.ppt` 会显示为下载项。
- 后台输入公式时，行内公式使用 `\(...\)`，独立公式使用 `\[...\]`，极限和求和使用 `\lim\limits` 与 `\sum\limits`，分式使用 `\frac{分子}{分母}`。KaTeX 及其字体在 `docs/vendor/katex/`。

## 习题参考资料

独立题页中的部分题目参考下列开放教材和课程的练习，题面和解答以本站的中英文版本为准。

- 函数、极限与连续性。 [OpenStax Calculus Volume 1 函数复习](https://openstax.org/books/calculus-volume-1/pages/1-review-exercises) · [极限法则](https://openstax.org/books/calculus-volume-1/pages/2-3-the-limit-laws) · [连续性](https://openstax.org/books/calculus-volume-1/pages/2-4-continuity)
- 导数与应用。 [OpenStax 导数复习](https://openstax.org/books/calculus-volume-1/pages/3-review-exercises) · [最大值与最小值](https://openstax.org/books/calculus-volume-1/pages/4-3-maxima-and-minima) · [中值定理](https://openstax.org/books/calculus-volume-1/pages/4-4-the-mean-value-theorem) · [导数和图像](https://openstax.org/books/calculus-volume-1/pages/4-5-derivatives-and-the-shape-of-a-graph) · [最优化](https://openstax.org/books/calculus-volume-1/pages/4-7-applied-optimization-problems) · [洛必达法则](https://openstax.org/books/calculus-volume-1/pages/4-8-lhopitals-rule)
- 积分。 [OpenStax 定积分复习](https://openstax.org/books/calculus-volume-1/pages/5-review-exercises) · [分部积分](https://openstax.org/books/calculus-volume-2/pages/3-1-integration-by-parts)
- 数列、级数和幂级数。 [OpenStax 数列](https://openstax.org/books/calculus-volume-2/pages/5-1-sequences) · [数列与级数复习](https://openstax.org/books/calculus-volume-2/pages/5-review-exercises) · [幂级数](https://openstax.org/books/calculus-volume-2/pages/6-1-power-series-and-functions) · [泰勒与麦克劳林级数](https://openstax.org/books/calculus-volume-2/pages/6-3-taylor-and-maclaurin-series)
- 组合计数与二项式定理。 [OpenStax Precalculus 2e 计数原理](https://openstax.org/books/precalculus-2e/pages/11-5-counting-principles) · [二项式定理](https://openstax.org/books/precalculus-2e/pages/11-6-binomial-theorem)
- 差商、连续性、导数奇偶性和黎曼和的部分题目参考了 David Jerison 的 MIT 18.01SC 题集 1C-1、1D-3、1F-6 和 3B-5。 [Differentiation](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/resources/mit18_01sc_pset1prb/) · [Integration](https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/resources/mit18_01sc_pset3prb/)
