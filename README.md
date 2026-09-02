# NancyAnnn · 技术美术作品集

基于 GitHub Pages 的静态个人作品集网页，包含简历信息与 4 个在线视频演示（游戏玩法、着色器、Maya 绑定）。

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

视频原始文件在 `D:\腾讯电脑管家截图文件\TA\文档\作品集`，仓库内是压缩后的 H.264 MP4（HTML5 可直接播放、支持拖动进度）。

## 发布到 GitHub Pages（一次性步骤）

1. 打开 <https://github.com/new>，新建 **公开** 仓库，仓库名必须精确为：

   ```text
   NancyAnnn.github.io
   ```

   （不要勾选 “Add a README” / “Add .gitignore”，保持空仓库。）

2. 在本项目文件夹打开终端（PowerShell），依次执行：

   ```powershell
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/NancyAnnn/NancyAnnn.github.io.git
   git push -u origin main
   ```

   > 若提示登录：选择 “Sign in with your browser” 按浏览器提示完成授权即可（已配置 Windows 凭据管理器时会自动登录）。

3. 进入仓库 Settings → Pages：
   - Source 选择 **Deploy from a branch**
   - Branch 选择 **main** 与 **/ (root)**
   - 点击 Save

4. 等待 1–2 分钟构建完成后，访问：

   ```text
   https://NancyAnnn.github.io/
   ```

## 以后更新内容

```powershell
# 替换 videos/ 或 images/ 下的文件后
git add .
git commit -m "更新作品"
git push
```

约 1 分钟后网页自动更新。想要给封面/说明/项目改文案，直接编辑 `index.html` 即可。

## 注意事项

- GitHub 单文件硬上限为 100 MB（超过 50 MB 会收到警告）；GitHub Pages 发布内容上限约 1 GB。**Git LFS 存储的内容不会被 GitHub Pages 提供**，所以不适合用 LFS 放视频。
- 当前 4 个视频已从约 390 MB 压到约 29 MB（1440p / 1200p 以内，CRF 压缩），既满足上限也利于加载。
- 若以后新增很大的演示（> 80 MB），建议先压缩，或改用 YouTube / Bilibili 外链，再在 `index.html` 中嵌入。
- 需要 HTTPS 与自定义域名时：仓库 Settings → Pages → Custom domain 填写域名，并在域名商处添加 CNAME 记录到 `NancyAnnn.github.io`。
