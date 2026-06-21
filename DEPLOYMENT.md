# EVA Archive：Vercel + GitHub + Decap CMS

## 1. 连接 GitHub

1. 在 GitHub 创建仓库，并把本项目推送到 `main` 分支。
2. 修改 `admin/config.yml` 中的 `repo`：

   ```yml
   repo: 你的GitHub用户名/仓库名
   ```

## 2. 创建 GitHub OAuth App

在 GitHub → Settings → Developer settings → OAuth Apps 中创建应用：

- Homepage URL：`https://你的域名`
- Authorization callback URL：`https://你的域名/api/callback`

记录生成的 Client ID 和 Client Secret。

## 3. 部署到 Vercel

1. 在 Vercel 导入 GitHub 仓库。
2. 在项目 Settings → Environment Variables 添加：
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET`
3. 部署完成后访问 `https://你的域名/admin`。

## 内容流转

- Decap 将周报写入 `content/reports/*.md`。
- 图片写入 `public/uploads/`。
- 保存会提交到 GitHub `main` 分支。
- GitHub 提交触发 Vercel 自动部署。
- 构建脚本将 Markdown 汇总为 `public/data/reports.json`。
- 前台“周报”档案自动读取该 JSON。

本地开发 Decap 时，可运行 `npx decap-server`，并通过 HTTP 静态服务器访问项目；不要直接用 `file://` 测试 CMS。
