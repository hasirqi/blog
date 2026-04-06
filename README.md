# 勉強君 Blog（无代码内容后台版）

这个版本在**不改动现有UI风格**的前提下，增加了可视化后台（Decap CMS）：

- 家人只需要打开 `/admin/`，登录 GitHub 后即可发文。
- 一篇文章里直接填写 **中文 / 英文 / 日文** 三套内容。
- 前台首页精选、归档列表、文章详情页都会自动读取 `content/posts.json`。

---

## 1. 一次性配置（5-10 分钟）

### 步骤 A：修改仓库名

编辑 `admin/config.yml`：

```yml
backend:
  name: github
  repo: YOUR_GITHUB_USERNAME/blog
  branch: main
```

把 `YOUR_GITHUB_USERNAME/blog` 换成你的真实 GitHub 仓库。

### 步骤 B：开启 OAuth（用于 CMS 登录）

Decap CMS 使用 GitHub 登录需要 OAuth 中间层。最简单做法：

1. 把站点部署到 Netlify（可直接关联 GitHub 仓库）。
2. 在 Netlify 打开 Identity + Git Gateway。
3. 访问 `https://你的域名/admin/` 即可登录和发布。

> 如果继续纯 GitHub Pages，不配 OAuth 会无法在后台直接提交。

---

## 2. 家人日常使用流程（无代码）

1. 打开：`https://你的域名/admin/`
2. 登录后进入「发布清单（主站读取）」
3. 点开「全部文章」，新增或编辑一条记录
4. 一次填完三种语言（zh/en/ja）
5. 保存并发布

发布后主站自动读取新内容，不需要手改源码。

---

## 3. 内容数据结构

所有前台文章都在：

- `content/posts.json`

每条记录包含：

- `id`：文章唯一ID
- `date`：发布日期
- `category`：work/life/hobby/thoughts
- `featured`：是否首页精选
- `readingTime`：三语阅读时长
- `translations.zh/en/ja`：标题、摘要、正文

---

## 4. 兼容说明

- 你原本的整体布局和样式保留。
- 新增了动态文章页 `page-article`。
- 旧的 `article-1/2/3` 静态页面仍保留，不影响现有设计。

