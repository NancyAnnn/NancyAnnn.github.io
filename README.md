# NancyAnnn · 作品集

基于 GitHub Pages 的静态个人作品集网页，包含简历信息与 在线视频演示（游戏玩法、着色器、Maya 绑定）。

## 目录结构

```text
.
├── index.html        # 页面主体
├── css/style.css     # 样式
├── js/main.js        # 视频弹窗 / 滚动动效
├── images/           # 视频封面（海报帧）
├── videos/           # 网页版压缩视频（合计约 29 MB）
└── README.md
```

仓库内是压缩后的 H.264 MP4（HTML5 可直接播放、支持拖动进度）。


## 以后更新内容

```powershell
# 替换 videos/ 或 images/ 下的文件后
git add .
git commit -m "更新作品"
git push
```

约 1 分钟后网页自动更新，访问：

   ```text
   https://NancyAnnn.github.io/
   ```


想要给封面/说明/项目改文案，直接编辑 `index.html` 即可。

## 注意事项

- GitHub 单文件硬上限为 100 MB（超过 50 MB 会收到警告）；GitHub Pages 发布内容上限约 1 GB。**Git LFS 存储的内容不会被 GitHub Pages 提供**，所以不适合用 LFS 放视频。
- 当前 4 个视频已从约 390 MB 压到约 29 MB（1440p / 1200p 以内，CRF 压缩），既满足上限也利于加载。
- 若以后新增很大的演示（> 80 MB），建议先压缩，或改用 YouTube / Bilibili 外链，再在 `index.html` 中嵌入。
- 需要 HTTPS 与自定义域名时：仓库 Settings → Pages → Custom domain 填写域名，并在域名商处添加 CNAME 记录到 `NancyAnnn.github.io`。
