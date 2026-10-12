# Emilie Chen · Research, Code & Life

陈柳颖的中英双语个人网站：研究、项目、教育与实习经历，以及生活影集。

## 本地运行

需要 Node.js 18+，不需要安装 npm 依赖：

```sh
npm run dev
# 打开 http://127.0.0.1:4321
npm run check
```

## 功能

- 中英文切换，并在浏览器保存语言偏好。
- 项目分类与详情弹窗；研究摘要展开。
- 九张照片，响应式 WebP 图片，PhotoSwipe 放大、滑动与键盘浏览。
- 邮箱复制、英文 PDF 简历下载。
- 手机、平板与桌面布局；键盘焦点、图片描述与减少动态效果支持。
- 静态 HTML / CSS / JavaScript，无后端、数据库、第三方字体或 CDN 请求。

## 修改内容

| 文件 | 用途 |
| --- | --- |
| `dist/index.html` | 英文内容、结构、搜索与分享元数据 |
| `dist/app.js` | 中文内容、项目资料、交互与相册 |
| `dist/style.css` | 排版、配色与响应式样式 |
| `dist/assets/` | 本地照片与图片尺寸清单 |
| `dist/Emilie-Chen-CV.pdf` | 网站英文简历 |
| `scripts/make-cv.py` | 使用 ReportLab 重新生成简历 |

照片保留自然外观，仅缩放、压缩为 WebP 并移除 EXIF。Cloudflare 技术栈参考截图不属于个人影集。

## 部署到 Cloudflare Pages

部署目录为 `dist`。使用 Direct Upload 上传 `dist/`，或连接本仓库并将构建输出目录设为 `dist`，构建命令留空。

本仓库附带手动触发的 GitHub Pages 工作流。需要在仓库 **Settings → Pages → Source** 选择 **GitHub Actions**，然后在 **Actions → Deploy personal website → Run workflow** 运行。上传代码不会自动改变网站访问范围。

更换站点域名后，更新 `dist/index.html` 中的 Open Graph URL、`dist/robots.txt` 与 `dist/sitemap.xml`。

## 开源选型

研究了 [Astro](https://github.com/withastro/astro)、[al-folio](https://github.com/alshedivat/al-folio) 与 [PhotoSwipe](https://github.com/dimsemenov/PhotoSwipe)。页面是原创的轻量静态实现，实际接入 **PhotoSwipe 5.4.4**。前两者作为框架和学术主题候选进行比较，未使用或复制其源码。

PhotoSwipe 官方文档：https://photoswipe.com/getting-started/ 。其源码与 MIT 许可证保存在 `dist/vendor/`，无需在线 CDN。

## 内容说明

个人经历与项目描述来自本人提供的履历与项目材料。医疗旅行和智能助行项目为概念演示。Paper Isle 的旧演示离线，作为项目存档保留。Polestar 实习按证明日期列为 2023 年 8-9 月。

本仓库仅包含网站内容和网站用简历，不包含身份证、护照、电话、成绩单、推荐信或申请材料。

## 授权

PhotoSwipe 遵循其随附的 MIT 许可。照片、履历与个人内容保留所有权利；公开托管不代表授予第三方再利用许可。
