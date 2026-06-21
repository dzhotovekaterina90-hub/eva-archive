# EVA Personal Archive

纯 HTML / CSS / JavaScript 个人档案网站，使用 Decap CMS 管理内容，GitHub 保存 Markdown 和图片，Vercel 负责构建与部署。

## 本地构建

```bash
npm run build
```

构建脚本读取以下内容目录：

- `content/reports`
- `content/projects`
- `content/experiments`
- `content/writing`

并生成 `public/data/*.json`。网站入口是根目录的 `index.html`。

本地预览必须使用 HTTP 服务，不能直接依赖 `file://` 测试 CMS 或内容请求。例如：

```bash
python -m http.server 4173
```

然后访问：

- 网站：`http://localhost:4173/`
- 后台：`http://localhost:4173/admin/`

## Vercel 部署设置

在 Vercel 导入本 GitHub 仓库时使用：

| 设置 | 值 |
| --- | --- |
| Framework Preset | `Other` |
| Root Directory | `./` |
| Build Command | `npm run build` |
| Output Directory | `.` |
| Install Command | 留空或使用默认值 |

需要配置的 Environment Variables：

| 变量 | 用途 |
| --- | --- |
| `GITHUB_CLIENT_ID` | GitHub OAuth App Client ID |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth App Client Secret |

GitHub OAuth App 设置：

- Homepage URL：`https://你的-vercel-域名`
- Authorization callback URL：`https://你的-vercel-域名/api/callback`

## Decap CMS 上线前配置

将 `admin/config.yml` 中的仓库占位符替换为真实 GitHub 仓库：

```yml
backend:
  name: github
  repo: GitHub用户名/仓库名
  branch: main
```

部署后访问 `https://你的-vercel-域名/admin`。在后台保存内容时，Decap 会提交到 GitHub `main`；新的 GitHub 提交会自动触发 Vercel 部署。

## 内容路径

- 周报 Markdown：`content/reports`
- 上传图片：`public/uploads`
- 前台周报索引：`public/data/reports.json`

更完整的 OAuth 配置步骤见 `DEPLOYMENT.md`。
