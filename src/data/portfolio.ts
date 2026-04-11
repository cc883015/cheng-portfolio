// ============================================================
// 个人数据维护说明
// ────────────────────────────────────────────────────────────
// • 头像：profile.avatar → public/images/profile.jpg（或 portfolio 目录下资源）
// • 关于区附图：profile.aboutImages（字符串数组，可多张横滑）
// • 履历 / 荣誉：每条可用 image（单张）或 images（多张，优先）
// • 博客外链：在 blogPosts 数组中追加条目（title/excerpt/url 等，支持中英）
// • 图片放 public/images/portfolio/，路径以 /images/portfolio/ 开头
// • 亦可使用 https://raw.githubusercontent.com/... 或 README 中 GitHub user-attachments 外链（便于与仓库大图一致）
// ============================================================

import type { L10n } from '../i18n/utils'

/** 本仓库 main 分支上的静态资源（用于站内条目展示高清原图） */
const GH_PORTFOLIO =
  'https://raw.githubusercontent.com/cc883015/cheng-portfolio/main/public' as const

export interface SocialLink {
  platform: string
  url: string
  icon: string
}

export interface TimelineItem {
  date: string
  displayDate: L10n
  type: 'work' | 'cert' | 'award' | 'project' | 'education'
  title: L10n
  subtitle?: L10n
  description: L10n
  tags?: string[]
  link?: string
  /** 源码仓库等次要外链（主 link 可为演示视频时配合使用） */
  repoLink?: string
  /** 演示视频等额外外链（可与 GitHub 主 link 并存，如个人站卡片挂课程 demo） */
  videoLink?: string
  /** 单图（与 images 二选一或并存；若仅有 image 会自动当作一张图展示） */
  image?: string
  /** 多图相册（领英式横滑）；有则优先使用 */
  images?: string[]
}

export interface SkillCategory {
  name: L10n
  skills: string[]
}

export interface LinkedInHighlight {
  id: string
  date: string
  displayDate: L10n
  title: L10n
  issuer?: L10n
  description?: L10n
  image?: string
  images?: string[]
  link?: string
}

/** 外链博文或笔记录；按 date 降序展示 */
export interface BlogPost {
  id: string
  date: string
  displayDate: L10n
  title: L10n
  excerpt: L10n
  url: string
  /** 展示在卡片角标，如 CSDN、GitHub、Medium */
  source?: L10n
  tags?: string[]
}

export const profile = {
  name: 'Charles Chen',
  nickname: '',
  title: {
    en: 'IT Technical Support · Hotel Management · Frontend Development · Cybersecurity · Image Signal Processing (ISP)',
    zh: 'IT 技术支持 · 酒店管理 · 前端开发 · 网络安全 · 影像信号处理（ISP）',
  } satisfies L10n,
  location: {
    en: 'Brisbane, Australia',
    zh: '澳大利亚布里斯班',
  } satisfies L10n,
  email: 'your.email@example.com',
  avatar: '/images/profile.jpg',
  resumeUrl: '/resume.pdf',
  /** 关于区正文下方的附图（可选，多张横滑） */
  aboutImages: [`${GH_PORTFOLIO}/images/portfolio/work-china-experience-overview.png`],
  bio: {
    en: `I'm Charles Chen, currently based in Brisbane, Australia. I'm committed to strengthening my computing foundations and I'm especially interested in AI-assisted coding and security. At QUT I'm pursuing a Master of Information Technology (Cybersecurity), combining research-oriented development with deeper security study. My bachelor's training in software engineering and economics helps me reason about systems, cost, and risk together.

Previously I worked as an imaging / ISP engineer at two listed companies—Huaqin Technology and Desay SV—with extensive hands-on experience in mobile and automotive camera bring-up, debugging, and lab/field validation. Today I serve as IT technical support and hotel manager with ITIGA (Australia Travel & Investment Group), balancing hospitality operations with continuous technical practice. I hold the Google IT Support Professional Certificate and the Google Cybersecurity Professional Certificate.

On GitHub I maintain full-stack and engineering projects (Node.js, React, MongoDB, CI/CD, Flask, Python, BLE/MQTT IoT, and ML coursework). On CSDN I write about networking, security, cryptography, camera ISP debugging and testing, cloud, and DevOps.

I value clear documentation, reproducible experiments, and implementations that remain defensible under real threats and constraints.`,
    zh: `我是 Charles Chen，目前常驻澳大利亚布里斯班。我致力于持续完善计算机学科基础，对于 AI coding 以及安全领域非常感兴趣，在昆士兰科技大学（QUT）攻读信息技术硕士（网络安全方向），并侧重研究开发与安全领域的深入结合。本科阶段具有软件工程与经济学双重训练，让我更习惯从系统、成本与风险角度理解技术决策。

除学业外，我曾经在两家上市公司担任影像开发工程师，分别是华勤技术股份有限公司（HQ）以及德赛西威汽车电子股份有限公司（Desay SV），对于手机与车载影像调试、测试有着丰富的经验。目前在澳洲国旅投资集团（ITIGA）担任 IT 技术支持/酒店经理，在运营与沟通中保持与实践并行的学习习惯。已取得 Google IT Support、Google Cybersecurity 等专业证书。我在 GitHub 维护多类工程实践（Node.js、React、MongoDB、CI/CD、Flask、Python、BLE/MQTT 物联网与机器学习课程项目等），并在 CSDN 整理网络、安全、密码学、影像调试/测试，以及云与 DevOps 相关笔记。

我重视文档清晰、实验可复现，以及能在真实威胁与约束下站得住脚的实现。`,
  } satisfies L10n,
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/charles-chen-683303395/',
    icon: 'Linkedin',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/cc883015',
    icon: 'Github',
  },
  {
    platform: 'CSDN',
    url: 'https://blog.csdn.net/weixin_44174312',
    icon: 'BookOpen',
  },
]

export const blogPosts: BlogPost[] = [
  {
    id: 'csdn-main',
    date: '2026-04',
    displayDate: { en: 'Ongoing', zh: '持续更新' },
    title: { en: 'CSDN — technical articles & study notes', zh: 'CSDN 技术专栏与学习笔记' },
    excerpt: {
      en: 'Long-form posts on networking, security, cryptography, camera ISP debugging and testing, cloud, and DevOps—written to be searchable and reusable as personal reference.',
      zh: '网络、安全、密码学、相机 ISP 调试与测试、云与 DevOps 等方向的长文与笔记，便于检索与日后复盘。',
    },
    url: 'https://blog.csdn.net/weixin_44174312',
    source: { en: 'CSDN', zh: 'CSDN' },
    tags: ['Networking', 'Security', 'ISP', 'Cloud'],
  },
  {
    id: 'github-activity',
    date: '2026-04',
    displayDate: { en: 'Ongoing', zh: '持续更新' },
    title: { en: 'GitHub — projects, code & README documentation', zh: 'GitHub — 项目代码与 README 文档' },
    excerpt: {
      en: 'Repositories spanning full-stack coursework, IoT, ML experiments, and CI/CD—READMEs and commit history double as engineering notes for setup, trade-offs, and reproduction.',
      zh: '涵盖全栈课程项目、物联网、机器学习实验与 CI/CD 等仓库；README 与提交记录承载环境说明、取舍与可复现性说明。',
    },
    url: 'https://github.com/cc883015',
    source: { en: 'GitHub', zh: 'GitHub' },
    tags: ['Open Source', 'Docs'],
  },
].sort((a, b) => {
  const d = b.date.localeCompare(a.date)
  if (d !== 0) return d
  return a.id.localeCompare(b.id)
})

export const skillCategories: SkillCategory[] = [
  {
    name: { en: 'IT Support & Service Desk', zh: 'IT 支持与服务台' },
    skills: [
      'Windows 10/11 desktop troubleshooting',
      'macOS end-user support',
      'Microsoft 365 (Outlook, Teams, OneDrive, SharePoint Online)',
      'Office suite (Word, Excel, PowerPoint)',
      'Google Workspace admin & Gmail (mailboxes, aliases, groups)',
      'Active Directory / Entra ID (Azure AD) user & group lifecycle',
      'Group Policy (GPO) awareness',
      'ITIL-style incident / request / change handling',
      'Service desk ticketing (ServiceNow, Jira SM, Freshservice)',
      'SLA triage, prioritisation & escalation',
      'Remote support (RDP, Quick Assist, screen-share tools)',
      'VPN clients & connectivity basics',
      'LAN / Wi-Fi diagnostics (DHCP, DNS, IP, default gateway)',
      'Printer & MFP setup (drivers, queues, scan-to-email)',
      'Endpoint imaging / provisioning awareness (SCCM, Intune)',
      'Patch & update hygiene (WSUS, WUfB concepts)',
      'Antivirus / Microsoft Defender & EDR first-line',
      'Phishing triage & end-user security awareness',
      'Mobile devices (iOS / Android, MDM enrolment basics)',
      'Backup & restore awareness (Veeam, cloud backup, versioning)',
      'Asset tagging & IMAC (install / move / add / change)',
      'Knowledge base articles & runbooks',
      'Written & phone communication (gov / enterprise tone)',
      'Accessibility basics (WCAG awareness, screen readers)',
      'PowerShell / CMD for repetitive fixes',
      'Multi-monitor & peripheral troubleshooting',
      'Software licence & SaaS access requests',
      'Onboarding / offboarding checklist support',
      'Meeting room AV & VC first-line (Teams / Zoom)',
      'CCTV & access-control vendor liaison (first-line)',
      'POS / EFTPOS terminal first-line & receipting',
      'PCI-DSS awareness in payment environments',
      'Clear desk / clean screen & records-handling awareness',
    ],
  },
  {
    name: { en: 'Development', zh: '开发' },
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'C', 'Tailwind CSS', 'Vite', 'Flask', 'REST APIs', 'Git workflows'],
  },
  {
    name: { en: 'Cybersecurity', zh: '网络安全' },
    skills: ['Network Security', 'SIEM (Splunk)', 'Vulnerability Assessment', 'ISO 27001', 'Incident Response'],
  },
  {
    name: { en: 'Infrastructure', zh: '基础设施' },
    skills: ['Linux', 'Docker', 'AWS', 'Networking (TCP/IP)', 'Active Directory', 'MQTT / IoT'],
  },
  {
    name: { en: 'Tools & Platforms', zh: '工具与平台' },
    skills: ['Git', 'VS Code', 'Wireshark', 'Figma', 'Jira', 'Power BI', 'MongoDB'],
  },
  {
    name: { en: 'Hotel & OTA Operations', zh: '酒店与渠道运营' },
    skills: [
      'Trip.com (Ctrip) partner hub / extranet',
      'Expedia Partner Central',
      'Booking.com Extranet / Pulse app',
      'Guestpoint (PMS / property workflows)',
      'Reservations, modifications & no-shows',
      'Refunds, partial refunds & payment disputes',
      'Rate plans, restrictions & inventory controls',
      'POS terminals & card payment settlement',
      'Cash handling & front-desk reconciliation',
      'Gmail / Google Workspace for front office',
      'Guest & office printers',
      'CCTV monitoring & footage retrieval',
      'Guest complaints & OTA case messaging',
      'Housekeeping & maintenance coordination',
    ],
  },
  {
    name: { en: 'Imaging & ISP', zh: '影像与 ISP' },
    skills: [
      'MediaTek (MTK) ISP Tuning',
      'DebugParser',
      'Analysis log debugging',
      'MTK portrait / framing tools',
      'CCT (Camera Control Tool)',
      'FSViewer',
      'Raw simulation (AF / ISP cross-check)',
      'BeyondCompare',
      'Gerrit',
      'Ubuntu (lab)',
      'Bastion host workflows',
      'Optical lab & objective tests (MTK standards)',
      'OTP programming / verification',
      'Sensor drivers & AF module validation',
      'AF module lead / multi-mode tuning',
      'Log × hardware cross-verification',
      'VIVO portrait algorithm precheck',
      'Production-line camera support',
      'Module SE / milestone risk coordination',
      'OmniVision X1F (1M)',
      'Sony ISX031 (3M)',
      'Doxin tuning box (sensor bring-up)',
      '9296 decoding board',
      'Camera module + serializer',
      'Custom bring-up software & per-project configs',
      'IUT301 Sony debugging toolbox',
      'Imatest',
      'MTF / resolution (ISO 12233, SFRplus)',
      'Noise & SNR',
      'Dynamic range (Step Charts)',
      'Color accuracy & ΔE (ColorChecker 24)',
      'Gamma / grayscale',
      'Distortion',
      'Shading / uniformity',
      'AWB validation',
      'Saturation testing',
      'Mobile & automotive cameras',
      'Lab & field validation',
    ],
  },
]

const highlightsRaw: LinkedInHighlight[] = [
  {
    id: 'scholarship-2024-07',
    date: '2024-07',
    displayDate: { en: 'Jul 2024', zh: '2024年7月' },
    title: { en: 'International Excellence Scholarship', zh: '国际优秀奖学金' },
    issuer: {
      en: 'Queensland University of Technology — International',
      zh: '昆士兰科技大学（国际事务）',
    },
    description: {
      en: 'Awarded in July 2024 (International Merit / excellence scholarship stream). Invited to the International Scholarship Recipient Celebration in August 2024 at Gardens Point campus.',
      zh: '2024 年 7 月获得国际优秀奖学金（International Merit Scholarship 体系）。受邀参加 2024 年 8 月在国际学生奖学金获奖者庆祝活动（Gardens Point 校区）。',
    },
    images: [
      '/images/portfolio/scholarship-celebration.png',
      '/images/portfolio/scholarship-invitation-email.png',
    ],
  },
]

export const linkedInHighlights = [...highlightsRaw].sort((a, b) => {
  const by = b.date.localeCompare(a.date)
  if (by !== 0) return by
  return a.id.localeCompare(b.id)
})

const timelineRaw: TimelineItem[] = [
  {
    date: '2024-07',
    displayDate: { en: 'Jul 2024 – Jun 2026', zh: '2024年7月 – 2026年6月' },
    type: 'education',
    title: { en: 'Master of IT (Cybersecurity)', zh: '信息技术硕士（网络安全）' },
    subtitle: { en: 'Queensland University of Technology (QUT)', zh: '昆士兰科技大学（QUT）' },
    description: {
      en: 'Coursework in cybersecurity, advanced network engineering, information security management, applied cryptography, and digital forensics.',
      zh: '课程涵盖网络安全、高级网络工程、信息安全管理、应用密码学与数字取证等方向。',
    },
    tags: ['Cybersecurity', 'Networking', 'Cryptography'],
    images: ['/images/portfolio/edu-qut.jpg'],
  },
  {
    date: '2024-06',
    displayDate: { en: '2017 – Jun 2021', zh: '2017年 – 2021年6月' },
    type: 'education',
    title: { en: "Bachelor's — Software Engineering & Economics", zh: '学士 — 软件工程与经济学' },
    subtitle: { en: 'Undergraduate institution · China', zh: '本科院校 · 中国' },
    description: {
      en: 'Combined software engineering training with economics coursework.',
      zh: '软件工程与经济学复合培养背景。',
    },
    tags: ['Software Engineering', 'Economics'],
    images: ['/images/portfolio/edu-bachelor.jpg'],
  },
  {
    date: '2024-08',
    displayDate: { en: 'Aug 2024 – Present', zh: '2024年8月 – 至今' },
    type: 'work',
    title: { en: 'IT Technical Support / Hotel Manager', zh: 'IT 技术支持 / 酒店经理' },
    subtitle: {
      en: 'ITIGA — Australia Travel & Investment Group · Brisbane, Australia',
      zh: '澳洲国旅投资集团（ITIGA）· 澳大利亚布里斯班',
    },
    description: {
      en: 'IT technical support together with hotel operations: guest services, property-related systems, end-user support, and day-to-day coordination—while keeping continuous hands-on technical practice.',
      zh: 'IT 技术支持与酒店运营管理并行：宾客服务、物业相关系统、终端用户技术支持与日常协调，并保持持续的技术实践习惯。',
    },
    tags: ['IT Support', 'Hospitality', 'Operations'],
  },
  {
    date: '2023-10',
    displayDate: { en: 'Sep 2022 – Oct 2023 · 1 yr 2 mos', zh: '2022年9月 – 2023年10月 · 1 年 2 个月' },
    type: 'work',
    title: {
      en: 'Imaging Development Engineer',
      zh: '影像开发工程师',
    },
    subtitle: {
      en: 'Desay SV · Full-time · Huizhou, Guangdong, China · On-site · ISP / camera tuning',
      zh: '德赛西威汽车电子 · 全职 · 中国广东惠州 · 现场 · ISP / 相机调试',
    },
    description: {
      en: `(1) Responsible for end-to-end ISP debugging for assigned OEM customers and factory firmware release for module bring-up.

(2) Platforms & kits: OWI Technology X1F (1M) with custom toolchain, Degree Technology box, 9296 decoding board, camera module, and tuned parameter bundles; Sony ISX031 (3M) with IUT301 Sony debugging toolbox.

(3) Focus areas: strong-light suppression; high-temperature aging (dark-noise drift); lens cleaning and defogging validation; AWB for specific scenes such as underground garage entrances; AE configuration including pre-frame counts and maximum exposure; outdoor road tests for CMOS dark noise and subjective image quality.

(4) Summarized objective lab reports, performed root-cause analysis and targeted tuning, and aligned subjective vs. objective acceptance criteria with customers.

(5) Supported e-drive/PMO teams with production-line activation packages and safe release/maintenance of factory firmware.

(6) On-site support at Xiaopeng Motors (Guangzhou) headquarters and plant for break-fix, on-site flashing, and equipment handover.

(7) Brought up Sony ISX031 sensor modules and completed a business trip to Sony (Shenzhen).`,
      zh: `（1）负责对应品牌客户的图像信号处理（ISP）全流程调试，以及模组开机相关的出厂固件发布。

（2）硬件与平台：OWI Technology X1F（1M）— 定制软件 + Degree Technology Box + 9296 解码板 + 相机模组与定制参数包；SONY ISX031（3M）+ IUT301 Sony 调试工具箱。

（3）技术要点：强光抑制；高温老化（暗噪声变化）；镜头清洁与去雾等测试；自动白平衡（AWB），如地库入口等场景；自动曝光（AE）预帧数与最长曝光；外场道路测试中的 CMOS 暗噪声与主观画质调试。

（4）输出客观实验报告，分析问题并做针对性调试，在主观与客观标准之间与客户协商折中。

（5）协助电驱及项目管理部门输出产线激活配置，并负责产线固件的安全发布与维护。

（6）出差小鹏汽车（广州）总部与工厂，处理现场问题、刷写固件与设备交付。

（7）调试 SONY ISX031 模组并出差索尼（深圳）。`,
    },
    tags: ['ISP', 'Cameras', 'Git', 'Automotive', 'SONY', 'AWB / AE'],
    images: [
      `${GH_PORTFOLIO}/images/portfolio/desay-lobby.png`,
      `${GH_PORTFOLIO}/images/portfolio/desay-hq-exterior.png`,
      `${GH_PORTFOLIO}/images/portfolio/work-desay-linked.png`,
    ],
  },
  {
    date: '2022-08',
    displayDate: { en: 'Dec 2020 – Aug 2022 · 1 yr 9 mos', zh: '2020年12月 – 2022年8月 · 1 年 9 个月' },
    type: 'work',
    title: {
      en: 'Imaging Development Engineer',
      zh: '影像开发工程师',
    },
    subtitle: {
      en: 'Huaqin Technology · Full-time · Wuxi, Jiangsu, China · On-site · ISP / camera tuning',
      zh: '华勤技术 · 全职 · 中国江苏无锡 · 现场 · ISP / 相机调试',
    },
    description: {
      en: `Owned MTK67 platform ISP-related bring-up and tuning.

Subjective and objective AF tuning; supported test teams and customers with issue reproduction and sign-off.

(1) Validated sensor variants and golden-module datasets; transplanted and maintained tuning parameters; early-phase bring-up with driver and algorithm teams.

(2) Addressed handset camera quality requirements; used lab optical setups for objective focus characterization on MTK platforms, optimized perceived image quality, and published objective reports.

(3) Used Mediatek toolchains and logs to debug IQ defects; resolved subjective focus issues raised by multiple quality stakeholders.

(4) Co-tuned parameters with performance and power teams to shorten AF threading/latency; coordinated closely with AE, ISP, and adjacent blocks.`,
      zh: `负责 MTK67 平台相关影像调试工作。

负责 AF（自动对焦）主观与客观调试；协助测试团队与客户进行问题复现与验证。

（1）确认传感器型号与 golden module 数据合理性，移植与管理参数；前期与驱动、算法等域协同完成功能贯通。

（2）响应客户对手机相机效果的需求；借助实验室光学设备调试 MTK 平台客观对焦表现，优化主观观感并输出客观报告。

（3）结合 log 与 MTK 工具分析画质问题，处理多质量部门提出的主观对焦类问题。

（4）通过参数调试配合性能与功耗团队，缩短性能与对焦相关线程耗时；与 AE、ISP 等模块协同联调。`,
    },
    tags: ['ISP', 'MTK', 'AF', 'Cameras', 'Agile'],
    images: [
      `${GH_PORTFOLIO}/images/portfolio/huaqin-campus-night.png`,
      `${GH_PORTFOLIO}/images/portfolio/huaqin-team-event.png`,
      `${GH_PORTFOLIO}/images/portfolio/work-huaqin-linked.png`,
    ],
  },
  {
    date: '2026-04',
    displayDate: { en: 'Apr 2026', zh: '2026年4月' },
    type: 'project',
    title: {
      en: 'Personal Portfolio — Professional Profile Site',
      zh: '个人作品集网站 — 职业档案站点',
    },
    subtitle: {
      en: 'React · TypeScript · Vite · Tailwind · Cloudflare Workers',
      zh: 'React · TypeScript · Vite · Tailwind · Cloudflare Workers',
    },
    description: {
      en: `Per GitHub README: Vite + React 19 + TypeScript SPA with Tailwind; all content is driven from src/data/portfolio.ts (profile, social links, skills, timeline). Sections cover Hero, About, Journey (education / awards / work / projects / certs), Skills, Blog, and Contact.

Stack: React, TypeScript, Vite, Tailwind, Lucide, Context (language + lightbox), IntersectionObserver reveal, responsive dark “cyber” UI (Space Grotesk, DM Sans, JetBrains Mono).

What it solves: One bilingual, CMS-free source of truth; static build suitable for edge deploy (e.g. Cloudflare Workers).

Skills: Front-end architecture, design tokens, a11y (reduced-motion, lightbox), i18n on a single route, production bundling.

Related demo: QUT IFN711 Brisbane 2032 hub walkthrough is linked separately (YouTube).`,
      zh: `与 GitHub README 一致：Vite + React 19 + TypeScript + Tailwind；文案与履历数据集中在 src/data/portfolio.ts。页面包含 Hero、关于、履历（教育/荣誉/工作/项目/证书）、技能、博客、联系等模块。

技术栈：React、TypeScript、Vite、Tailwind、Lucide、Context（语言与灯箱）、滚动显现、响应式深色科技感界面与多字体层级。

解决的问题：中英双语个人站单一数据源、无 CMS、静态构建并可部署到边缘（如 Cloudflare Workers）。

能力体现：前端架构、设计系统、无障碍与动效降级、单路由国际化与生产级打包。

相关演示：QUT IFN711 布里斯班 2032 门户演示视频见下方「观看演示」链接。`,
    },
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Cloudflare Workers'],
    link: 'https://github.com/cc883015/cheng-portfolio',
    videoLink: 'https://youtu.be/_IXVktmmQ9w',
    images: [
      '/images/portfolio/project-personal-portfolio-showcase.png',
      `${GH_PORTFOLIO}/favicon.svg`,
    ],
  },
  {
    date: '2026-03',
    displayDate: { en: 'Mar 2026', zh: '2026年3月' },
    type: 'project',
    title: {
      en: 'OLYMPIC2032 — Brisbane 2032 Games Hub',
      zh: 'OLYMPIC2032 — 布里斯班 2032 奥运资讯门户',
    },
    subtitle: {
      en: 'QUT IFN711 · Next.js · Go · Docker · Brisbane 2032 hub',
      zh: 'QUT IFN711 · Next.js · Go · Docker · 布里斯班 2032 资讯门户',
    },
    description: {
      en: `Team project OLYMPIC2032: an official-style information hub for the Brisbane 2032 Olympic & Paralympic Games—home, events, venues, athletes, medals, news, tickets, and Paralympics routes.

Stack (from the delivered codebase): Next.js (App Router, visitor-app, Turbopack dev server), TypeScript frontend, Go backend (go.mod), Docker for containerized services, structured navigation and hero CTAs (e.g. View Events, Paralympics Hub).

What it does: Cohesive public-facing discovery and messaging; separated frontend/backend layout for ownership and deployment.

Problems solved: Delivers a runnable full-stack slice instead of static mockups; aligns UI copy and information architecture with a large event narrative under course time limits.

Skills demonstrated: Full-stack coordination, modern React/Next patterns, Go service structure, container-aware workflow, demo storytelling.

Screenshot: IDE with running Brisbane 2032 hub in browser (composite).`,
      zh: `团队项目 OLYMPIC2032：面向布里斯班 2032 奥运会与残奥会的资讯门户原型，涵盖 Home、赛事、场馆、运动员、奖牌、新闻、票务与 Paralympics 等路由与导航。

技术栈（与实现一致）：Next.js（App Router、visitor-app、Turbopack）、TypeScript 前端；Go 后端（go.mod）；Docker；首屏英雄区与主要 CTA。

实现功能：统一的公共信息架构与品牌化页面，前后端目录分离，便于分工与部署。

解决的问题：在课程周期内交付可运行的全栈切片，并将叙事与真实大型活动场景对齐。

能力体现：全栈协作、现代 React/Next 实践、Go 服务结构、容器化意识与演示表达。

配图：本地开发环境 + 浏览器中运行的布里斯班 2032 门户（组合截图）。`,
    },
    tags: ['Next.js', 'Go', 'TypeScript', 'Docker'],
    link: '#',
    images: ['/images/portfolio/project-olympicflow-hub.png'],
  },
  {
    date: '2026-03',
    displayDate: { en: 'Mar 2026', zh: '2026年3月' },
    type: 'project',
    title: { en: 'UDP Client-Server System', zh: 'UDP 客户端-服务器系统' },
    subtitle: { en: 'ENN523 Network Engineering', zh: 'ENN523 网络工程' },
    description: {
      en: `ENN523 network engineering coursework: UDP client/server in C with application-level reliability (timeouts, retransmission-style acknowledgements), structured error handling, and clear separation of send/receive paths.

Stack: C, POSIX sockets, UDP.

Problem: UDP is unreliable by design—this lab implements patterns that mimic reliability for learning.

Skills: Low-level networking, protocol reasoning, defensive coding under packet loss.`,
      zh: `QUT ENN523 网络工程作业：以 C 语言实现 UDP 客户端/服务端，在应用层补充超时、确认与重传等可靠性思路，并规范错误处理与收发逻辑分离。

技术栈：C、POSIX Socket、UDP。

解决的问题：UDP 本身不可靠，通过实验理解如何在用户态构造可控的可靠语义。

能力体现：底层网络编程、协议层推理与在丢包场景下的健壮性意识。`,
    },
    tags: ['C', 'UDP', 'Socket Programming'],
    images: ['/images/portfolio/project-enn523-udp.jpg'],
  },
  {
    date: '2024-12',
    displayDate: { en: 'Dec 2024', zh: '2024年12月' },
    type: 'project',
    title: { en: 'Online Bookstore Web Application', zh: '在线书店 Web 应用' },
    subtitle: { en: 'Flask + SQLite', zh: 'Flask + SQLite' },
    description: {
      en: `Flask + SQLite full-stack web app (GitHub: Online-Bookstore-Web-Application): product catalog, cart-style flows, and server-rendered pages with modular Python packages.

Stack: Python, Flask, SQLite, Jinja-style templating patterns.

Problem: Practice end-to-end HTTP handling, persistence, and session/cart logic without a heavy framework.

Skills: Backend routing, SQL data modelling, template-driven UI integration.`,
      zh: `Flask + SQLite 全栈网店练习项目（GitHub 仓库名 Online-Bookstore-Web-Application）：书目目录、类购物车流程、服务端渲染页面与模块化 Python 结构。

技术栈：Python、Flask、SQLite。

解决的问题：在不引入过重框架的前提下练习 HTTP、持久化与购物车/会话逻辑。

能力体现：路由设计、关系型建模与模板化页面整合。`,
    },
    tags: ['Flask', 'Python', 'SQLite'],
    link: 'https://github.com/cc883015/Online-Bookstore-Web-Application',
    images: [
      '/images/portfolio/project-online-bookstore-catalog.png',
      '/images/portfolio/project-bookstore.jpg',
    ],
  },
  {
    date: '2025-10',
    displayDate: { en: 'Oct 2025', zh: '2025年10月' },
    type: 'project',
    title: {
      en: 'Multiclass vs Binary Classification (ML)',
      zh: '多分类与二分类模型对比（机器学习）',
    },
    subtitle: { en: 'UNSW-NB15 · LR & RF · metrics & plots', zh: 'UNSW-NB15 · LR 与 RF · 指标与图表' },
    description: {
      en: `GitHub README project: compares binary vs multiclass classification on the same features and compute budget, plus confusion-reduction strategies (class weighting, SMOTE, threshold tuning).

Stack: Python, scikit-learn (Logistic Regression, Random Forest), pandas pipeline in utils_data.py, metrics in metrics_utils.py, experiments in q1_train_test.py / q2_train_test.py, plots from plot_results.py.

Q1 (plots in repo): q1_accuracy.png, q1_latency.png, q1_macro_f1.png — compare Accuracy, latency per sample, Macro-F1, and model size between binary and multiclass LR/RF. README finding: binary models tend to achieve higher Accuracy and F1; multiclass shows more false positives and instability.

Q2 (plots): q2_macro_f1.png, q2_macro_fpr.png — evaluate class weighting, SMOTE, and threshold adjustment. README finding: SMOTE and threshold tuning improve separation; class weighting helps balance but can increase errors on some classes.

Artifacts: CSV confusion matrices (cm_binary_*, cm_multiclass_*, confusion_class_weights_*, confusion_smote_*).

Skills: Experimental design, metric literacy (Accuracy, Macro-F1, Macro-FPR, latency), reproducible plots, imbalanced-data techniques.`,
      zh: `与 GitHub README 一致：在相同数据与算力下对比二分类与多分类，并实验类别权重、SMOTE、阈值调整等对混淆的影响。

技术栈：Python、scikit-learn（逻辑回归、随机森林）、utils_data / metrics_utils / q1_train_test / q2_train_test / plot_results 等脚本。

Q1（仓库内图）：q1_accuracy.png、q1_latency.png、q1_macro_f1.png — 对比准确率、单样本延迟、Macro-F1 与模型体量；README 结论：二分类通常在 Accuracy 与 F1 上更占优，多分类假阳性更多、稳定性更差。

Q2（图）：q2_macro_f1.png、q2_macro_fpr.png — 评估加权、SMOTE、阈值策略；README 结论：SMOTE 与阈值调整有助于类间分离；类别权重改善均衡但可能牺牲部分类别精度。

产出：多份混淆矩阵 CSV 便于复核。

能力体现：实验设计、指标解读（Accuracy / Macro-F1 / Macro-FPR / 延迟）、可复现作图与不均衡数据手段。`,
    },
    tags: ['Python', 'Machine Learning', 'Scikit-learn'],
    link: 'https://github.com/cc883015/Multiclass-vs-Binary-Comparison-in-Machine-Learning',
    images: [
      '/images/portfolio/project-ml-experiments-workspace.png',
      'https://raw.githubusercontent.com/cc883015/Multiclass-vs-Binary-Comparison-in-Machine-Learning/main/q1_accuracy.png',
      'https://raw.githubusercontent.com/cc883015/Multiclass-vs-Binary-Comparison-in-Machine-Learning/main/q1_latency.png',
      'https://raw.githubusercontent.com/cc883015/Multiclass-vs-Binary-Comparison-in-Machine-Learning/main/q1_macro_f1.png',
      'https://raw.githubusercontent.com/cc883015/Multiclass-vs-Binary-Comparison-in-Machine-Learning/main/q2_macro_f1.png',
      'https://raw.githubusercontent.com/cc883015/Multiclass-vs-Binary-Comparison-in-Machine-Learning/main/q2_macro_fpr.png',
    ],
  },
  {
    date: '2025-10',
    displayDate: { en: 'Oct 2025', zh: '2025年10月' },
    type: 'project',
    title: { en: 'Smart Indoor Mold Risk Monitor (IoT)', zh: '室内霉菌风险监测（物联网）' },
    subtitle: { en: 'Arduino · Raspberry Pi · AWS EC2 · Mosquitto', zh: 'Arduino · 树莓派 · AWS EC2 · Mosquitto' },
    description: {
      en: `README: 3-tier indoor environment monitor—temperature & humidity—with real-time alerts and remote control over BLE + MQTT.

Tier 1 (sensing): Arduino Nano 33 IoT, DHT11, RGB LED, buzzer; BLE GATT notify for sensor stream, write characteristic for commands; comfort / risk thresholds documented in slides.

Tier 2 (gateway): Raspberry Pi, Python 3, bleak (BLE central), paho-mqtt, asyncio—bridges Nano notifications to MQTT and forwards cloud commands back to BLE.

Tier 3 (cloud): Mosquitto on AWS EC2 (e.g. port 1883 for lab), topics such as sensor upstream and command downstream; mobile clients (e.g. MyMQTT) subscribe for live JSON payloads like {"temperature":25.7,"humidity":52,"status":"NORMAL"}.

Problem: Demonstrate end-to-end IoT from constrained device to cloud with observable telemetry.

Skills: Embedded + Linux gateway scripting, protocol bridging, AWS networking basics, JSON payloads, ops logging.`,
      zh: `与 GitHub README 一致：三层室内环境监测（温湿度），BLE + MQTT 实现实时告警与远程控制。

Tier 1（感知）：Arduino Nano 33 IoT、DHT11、RGB、蜂鸣器；BLE 通知上报、命令特征写入；舒适区/风险阈值见演示材料。

Tier 2（网关）：树莓派、Python 3、bleak、paho-mqtt、asyncio，将 BLE 数据桥接到 MQTT 并回写下发命令。

Tier 3（云端）：AWS EC2 上 Mosquitto（实验环境开放 1883 等），上下行主题分离；手机端可订阅 JSON 遥测（如 temperature、humidity、status）。

解决的问题：从受限设备到云端的完整物联网链路可观测、可演示。

能力体现：嵌入式与网关脚本、协议桥接、AWS 网络基础、JSON 载荷与运行日志分析。`,
    },
    tags: ['IoT', 'BLE', 'MQTT'],
    link: 'https://github.com/cc883015/Smart_Indoor_Mold_Risk_Monitor-BLE-MQTT-Cloud-',
    images: [
      'https://github.com/user-attachments/assets/ae7785f4-3fdb-4f0a-96a2-f8c9451ca45b',
      'https://github.com/user-attachments/assets/7fa84293-feaa-4e6f-832c-33003c187a52',
      'https://github.com/user-attachments/assets/bb3b782d-93b8-4c34-b807-39622fdad508',
      'https://github.com/user-attachments/assets/80e105ce-b638-4c64-ad07-3c7eb5b144a6',
      '/images/portfolio/project-iot-ble-mqtt-terminal.png',
      '/images/portfolio/project-iot-tier3-cloud-mqtt.png',
      '/images/portfolio/project-iot-tier2-pi-gateway.png',
    ],
  },
  {
    date: '2025-08',
    displayDate: { en: 'Aug 2025', zh: '2025年8月' },
    type: 'project',
    title: { en: 'Hotel Employee Work Schedule System', zh: '酒店员工排班系统' },
    subtitle: { en: 'Python · tkinter · tkcalendar · SQLite · CSV', zh: 'Python · tkinter · tkcalendar · SQLite · CSV' },
    description: {
      en: `GitHub README: desktop scheduling & payroll helper for hotels/SMBs—built while working as motel manager.

Stack: Python 3.9+, tkinter + tkcalendar GUI, SQLite3 persistence, csv exports for daily reports and payroll summaries.

Features: calendar-based shifts, roles (cleaner/receptionist), full vs half-day rates, auto daily/weekly wage totals, filters and name sorting, CSV export for management archives.

Problems solved: Replace messy manual rosters and error-prone wage math with a guided UI and reproducible exports.

Skills: Domain-driven tooling, CRUD-style state over SQLite, UX for non-technical operators.`,
      zh: `与 GitHub README 一致：面向酒店或中小企业的桌面排班与工资统计工具（兼职经理场景真实需求）。

技术栈：Python 3.9+、tkinter + tkcalendar、SQLite3、标准库 csv 导出。

功能：按日历排班、角色（清洁/前台）、全班/半班计价、自动汇总日薪与周薪、筛选排序、导出 CSV 便于留档。

解决的问题：替代手工排班表与易错的工资计算，用可视化界面与可导出报表降低管理成本。

能力体现：业务驱动开发、SQLite 状态管理、面向非技术同事的交互设计。`,
    },
    tags: ['Python', 'SQLite', 'tkinter'],
    link: 'https://github.com/cc883015/Hotel_Employee_Work_Sechedule_System',
    images: [
      'https://github.com/user-attachments/assets/e3ed693c-1fa5-4968-ac11-c2e97329c16e',
      'https://github.com/user-attachments/assets/a465cfb9-6f36-4540-afbb-b53c9b422a94',
      'https://github.com/user-attachments/assets/1f7966c0-b533-4bb8-8dea-ac1c3b295004',
    ],
  },
  {
    date: '2025-05',
    displayDate: { en: 'May 2025', zh: '2025年5月' },
    type: 'project',
    title: { en: 'Book Review & User Manager', zh: '书评与用户管理系统' },
    subtitle: { en: 'Node.js · Express · MongoDB · React (Vite)', zh: 'Node.js · Express · MongoDB · React (Vite)' },
    description: {
      en: `README: Book Review & User Manager—readers discover books, post star ratings and comments; admins moderate content and users.

Stack: Node.js + Express REST API, MongoDB + Mongoose, JWT + bcrypt auth, rate limiting; React (Vite) client with Mantine components; deploy note: Caddy reverse proxy.

Capabilities: Register/login, JWT-protected routes, book CRUD (admin), review CRUD with ownership rules, admin user management, pagination with link headers, average rating rollups, standardized errors.

Problem: Showcase secure multi-role CRUD, pagination, and abuse controls in a realistic reading community scenario.

Skills: AuthZ/authN design, REST contracts, Mongo modelling, React SPA integration, operational hardening (rate limits).`,
      zh: `与仓库 README 一致：书评与用户管理——读者浏览书目、发表星级与文字评价；管理员审核内容与账号。

技术栈：Node.js + Express、MongoDB + Mongoose、JWT + bcrypt、限流中间件；React（Vite）+ Mantine；文档提及 Caddy 反代部署。

功能：注册登录、JWT 保护路由、书目全生命周期（管理员）、评价增删改（用户仅能管理本人内容，管理员可全局管理）、用户管理、服务端分页与平均分回写、统一错误响应。

解决的问题：在多角色场景下演示安全 CRUD、分页与简单防滥用。

能力体现：鉴权/授权设计、REST 契约、Mongo 建模、React 联调与基础运维加固。`,
    },
    tags: ['Node.js', 'React', 'MongoDB', 'JWT'],
    link: 'https://github.com/cc883015/Book_Review_User_Manager',
    images: [
      '/images/portfolio/project-book-review-01-home.png',
      '/images/portfolio/project-book-review-02-atlas.png',
      '/images/portfolio/project-book-review-03-admin.png',
    ],
  },
  {
    date: '2025-04',
    displayDate: { en: 'Apr 2025', zh: '2025年4月' },
    type: 'project',
    title: { en: 'Product Review & Rating System', zh: '产品评价与评分系统' },
    subtitle: { en: 'Node.js · Express · MongoDB · React · Tailwind · React Router', zh: 'Node.js · Express · MongoDB · React · Tailwind · React Router' },
    description: {
      en: `README: Product Review & Rating System—CRUD for products, reviews, and ratings.

Stack: Node.js 23 / Express 4 backend, MongoDB 6, React 18 + Tailwind + React Router 6; requirement diagram tracked in-repo; Jira board linked for delivery tracking.

Run path: npm start orchestrates app; separate backend/frontend dev servers for local work.

Problem: Deliver a modern JS full-stack assessment with traceable requirements (diagram) and persistent document storage.

Skills: Layered backend, React UI with router, Tailwind styling, collaboration artefacts (diagram + board).`,
      zh: `与 README 一致：产品评价与评分系统——产品、评价、打分的 CRUD。

技术栈：Node.js / Express 后端、MongoDB、React 18 + Tailwind + React Router 6；仓库含需求示意图；文档链接 Jira 看板用于进度管理。

运行方式：npm start 一键编排；本地可分别启动 backend 与 frontend。

解决的问题：在课程作业约束下交付可追踪需求（图示）+ 持久化的现代 JS 全栈应用。

能力体现：分层后端、路由化前端、Tailwind 界面与协作产物（图 + 看板）。`,
    },
    tags: ['React', 'Node.js', 'MongoDB', 'CI/CD'],
    link: 'https://github.com/cc883015/Product_Review_Rating_System',
    images: [
      'https://raw.githubusercontent.com/cc883015/Product_Review_Rating_System/main/requirement_diagram.png',
      'https://raw.githubusercontent.com/cc883015/Product_Review_Rating_System/main/frontend/src/logo.svg',
    ],
  },
  {
    date: '2025-03',
    displayDate: { en: 'Mar 2025', zh: '2025年3月' },
    type: 'project',
    title: { en: 'Task Manager — AWS Setup (fork)', zh: '任务管理 — AWS 部署（Fork）' },
    subtitle: { en: 'Based on rajuiit/taskmanager_aws_setup', zh: '源自 rajuiit/taskmanager_aws_setup' },
    description: {
      en: `Fork of rajuiit/taskmanager_aws_setup: MERN-style task manager focused on AWS hosting practice per upstream README.

Features called out: signup/login/logout, profile updates, task CRUD, validation (fields + email), MongoDB persistence, Git-based coursework workflow.

Stack: JavaScript/Node ecosystem, MongoDB Atlas account flow documented, AWS-oriented deployment steps.

Problem: Build cloud literacy—provision data store, wire a hosted JS API, and ship a CRUD UI students extend via GitHub.

Skills: DevOps-minded iteration, managed database usage, full-stack debugging across local vs cloud environments.`,
      zh: `Fork rajuiit/taskmanager_aws_setup：面向 AWS 部署练习的任务管理应用（README 所述 MERN 路线）。

功能：注册/登录/登出、资料更新、任务增删改查、输入校验与邮箱校验、MongoDB 持久化、基于 GitHub 的作业迭代流程。

技术栈：JavaScript/Node 生态、文档引导 MongoDB Atlas 账号与 AWS 相关步骤。

解决的问题：在课程中建立「云主机 + 托管数据库 + CRUD 应用」的端到端认识。

能力体现：偏运维向的迭代、托管数据库使用、以及本地与云端联调。`,
    },
    tags: ['AWS', 'JavaScript', 'DevOps'],
    link: 'https://github.com/cc883015/TaskManager_Aws_setup',
  },
  {
    date: '2026-05',
    displayDate: { en: 'Expected May 2026', zh: '预计 2026年5月' },
    type: 'cert',
    title: { en: 'Google Cybersecurity Professional Certificate', zh: 'Google 网络安全专业证书' },
    subtitle: { en: 'Google / Coursera (in progress)', zh: 'Google / Coursera（进行中）' },
    description: {
      en: 'Expected completion May 2026. Covers security frameworks, threat analysis, SIEM-style tooling, incident response, and Python automation.',
      zh: '预计 2026 年 5 月取得。内容涵盖安全框架、威胁分析、类 SIEM 工具、事件响应与安全向 Python 自动化。',
    },
    tags: ['Cybersecurity', 'SIEM', 'Python'],
    images: ['/images/portfolio/cert-google-cybersecurity.jpg'],
  },
  {
    date: '2026-04',
    displayDate: { en: 'Apr 2026', zh: '2026年4月' },
    type: 'cert',
    title: { en: 'Google IT Support Professional Certificate', zh: 'Google IT 支持专业证书' },
    subtitle: { en: 'Google / Coursera', zh: 'Google / Coursera' },
    description: {
      en: 'Completed April 2026 (certificate dated 6 Apr 2026). Six-course programme: technical support, networking, operating systems, sysadmin, IT security, and job search with AI.\n\nVerify on Coursera: https://coursera.org/verify/professional-cert/EKB6VNROZNU3',
      zh: '2026 年 4 月取得（证书日期 2026 年 4 月 6 日）。六门课程涵盖技术支持、网络、操作系统、系统管理、IT 安全及 AI 辅助求职等。\n\nCoursera 核验链接：https://coursera.org/verify/professional-cert/EKB6VNROZNU3',
    },
    tags: ['IT Support', 'Networking'],
    images: ['/images/portfolio/cert-google-it-support.png'],
  },
]

export const timelineItems = [...timelineRaw].sort((a, b) => {
  const byDate = b.date.localeCompare(a.date)
  if (byDate !== 0) return byDate
  return a.title.en.localeCompare(b.title.en)
})

function sortTimelineItems(items: TimelineItem[]): TimelineItem[] {
  return [...items].sort((a, b) => {
    const d = b.date.localeCompare(a.date)
    if (d !== 0) return d
    return a.title.en.localeCompare(b.title.en)
  })
}

/** 按页面区块拆分（教育 → 荣誉 → 工作 → 项目 → 证书） */
export const timelineByCategory = {
  education: sortTimelineItems(timelineItems.filter((i) => i.type === 'education')),
  work: sortTimelineItems(timelineItems.filter((i) => i.type === 'work')),
  project: sortTimelineItems(timelineItems.filter((i) => i.type === 'project')),
  cert: sortTimelineItems(timelineItems.filter((i) => i.type === 'cert')),
}
