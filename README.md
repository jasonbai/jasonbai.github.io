# ThinkDat 个人主页

基于 React 19、Vite 6、Tailwind CSS 4 的静态作品集站点。

## 本地开发

1. 安装依赖：`npm install`
2. 启动开发服务器：`npm run dev`
3. 生产构建：`npm run build`，静态资源输出在 `dist/` 目录

## 部署到腾讯云（静态托管）

将 `npm run build` 生成的 `dist/` 内全部文件上传到对象存储（如 COS）并开启静态网站托管，或使用 EdgeOne Pages、云开发静态托管等同类产品；若使用自定义域名，在控制台绑定并完成 HTTPS 证书即可。
