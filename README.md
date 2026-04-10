# Charles Chen — Personal Portfolio

> 🚀 基于 Vite + React + TypeScript + Tailwind CSS 的科技感个人博客

## 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 打开浏览器访问 http://localhost:5173
```

## 项目结构

```
cheng-portfolio/
├── public/
│   ├── favicon.svg          # 网站图标
│   ├── avatar.jpg           # ← 放你的头像照片
│   └── resume.pdf           # ← 可选：放你的简历
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # 顶部导航栏（滚动透明→毛玻璃）
│   │   ├── Hero.tsx         # 首屏：名字 + 标题 + 社交链接
│   │   ├── SocialIcons.tsx  # 社交媒体图标组件
│   │   ├── About.tsx        # 个人简介 + 快速信息卡
│   │   ├── Timeline.tsx     # ⭐ 核心：时间线（工作/证书/项目/奖项）
│   │   ├── Skills.tsx       # 技能分类网格
│   │   └── Contact.tsx      # 联系方式 + 页脚
│   ├── data/
│   │   └── portfolio.ts     # ⭐ 所有个人数据都在这里改
│   ├── hooks/
│   │   └── useReveal.ts     # 滚动进入视图动画 hook
│   ├── App.tsx              # 主页面组件
│   ├── main.tsx             # React 入口
│   ├── index.css            # 全局样式 + Tailwind + 特效
│   └── vite-env.d.ts        # Vite 类型声明
├── index.html               # HTML 入口 + 字体加载
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── vercel.json              # Vercel SPA 路由配置
└── .gitignore
```

## 如何修改内容

**所有个人数据都集中在 `src/data/portfolio.ts` 一个文件里：**

1. **个人信息** → 修改 `profile` 对象（名字、标题、简介、邮箱）
2. **社交链接** → 修改 `socialLinks` 数组（CSDN、LinkedIn、TikTok、GitHub）
3. **技能** → 修改 `skillCategories` 数组
4. **时间线** → 修改 `timelineItems` 数组，支持 5 种类型：
   - `work` — 工作经历（蓝色）
   - `cert` — 证书（绿色）
   - `award` — 奖项（金色）
   - `project` — 项目（紫色）
   - `education` — 教育（青色）

添加新条目只需要往数组里加一个对象，会自动按日期排序。

## 部署到 Vercel

```bash
# 方式一：GitHub 自动部署（推荐）
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/你的用户名/cheng-portfolio.git
git push -u origin main
# 然后去 vercel.com → New Project → 导入仓库 → Deploy

# 方式二：CLI 手动部署
npm i -g vercel
vercel login
vercel        # 预览
vercel --prod # 正式上线
```

## 设计特点

- 🌑 深色科技感主题，赛博朋克风格
- ✨ Cyan (#00ffe4) 高亮色 + 发光效果
- 🔲 网格背景 + 噪点纹理 + 扫描线动画
- 📱 完全响应式（手机/平板/桌面）
- 🎯 滚动进入动画（Intersection Observer）
- 🔤 JetBrains Mono（代码风格）+ Space Grotesk（标题）+ DM Sans（正文）
