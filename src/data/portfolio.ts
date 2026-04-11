// ============================================================
// 个人数据维护说明
// ────────────────────────────────────────────────────────────
// • 头像：profile.avatar → public/images/profile.jpg（或 portfolio 目录下资源）
// • 关于区附图：profile.aboutImages（字符串数组，可多张横滑）
// • 履历 / 荣誉：每条可用 image（单张）或 images（多张，优先）
// • 图片放 public/images/portfolio/，路径以 /images/portfolio/ 开头
// ============================================================

import type { L10n } from '../i18n/utils'

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
  aboutImages: ['/images/portfolio/work-china-experience-overview.png'],
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
    images: ['/images/portfolio/work-itiga.jpg'],
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
    images: ['/images/portfolio/desay-lobby.png', '/images/portfolio/desay-hq-exterior.png'],
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
    images: ['/images/portfolio/huaqin-campus-night.png', '/images/portfolio/huaqin-team-event.png'],
  },
  {
    date: '2026-03',
    displayDate: { en: 'Mar 2026', zh: '2026年3月' },
    type: 'project',
    title: {
      en: 'OlympicFlow (2032) — Smart Transit Platform',
      zh: 'OlympicFlow（2032）— 智慧交通平台',
    },
    subtitle: { en: 'QUT IFN711 Team Project', zh: 'QUT IFN711 团队项目' },
    description: {
      en: `Concept-to-prototype team project aligned with Brisbane 2032 mobility narratives: a smart transit operations view that stitches map layers, service alerts, and ridership-style signals into one coherent dashboard.

I led the frontend and UI/UX track—information hierarchy for operators, responsive layouts, and map-centric interactions built with React and Leaflet.js, plus animated charts for corridor load and delay hotspots. We iterated on accessibility contrast, keyboard paths, and “glanceable” status chips so the UI stays usable during incident reviews.

The stack centers on React, Leaflet.js, and client-side visualization patterns suitable for live or simulated feeds; the goal is a credible foundation for future integration with open data APIs and scenario playback for Olympic-scale event days.`,
      zh: `与布里斯班 2032 城市出行叙事相呼应的课程团队项目：从概念到可演示原型，搭建面向运营侧的智慧交通看板，将线路图层、服务告警与类客流信号整合到同一工作界面。

我负责前端与 UI/UX：梳理信息层级、响应式布局，以及以地图为核心的交互；使用 React、Leaflet.js，并加入走廊负载与延误热点的动态图表。多轮迭代中兼顾对比度与键盘路径，用可扫读的状态标签支撑应急复盘场景。

技术栈以 React、Leaflet.js 与适合实时或模拟数据的前端可视化为主，目标是为后续对接开放数据 API、以及奥运量级活动日的情景回放预留扩展空间。`,
    },
    tags: ['React', 'Leaflet.js', 'UI/UX'],
    link: '#',
    images: ['/images/portfolio/project-olympicflow.jpg'],
  },
  {
    date: '2026-03',
    displayDate: { en: 'Mar 2026', zh: '2026年3月' },
    type: 'project',
    title: { en: 'UDP Client-Server System', zh: 'UDP 客户端-服务器系统' },
    subtitle: { en: 'ENN523 Network Engineering', zh: 'ENN523 网络工程' },
    description: {
      en: 'C implementation of UDP client-server communication with reliability patterns, error handling, and acknowledgment-style control.',
      zh: '使用 C 语言实现 UDP 通信，包含可靠性设计、错误处理与确认机制。',
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
      en: 'Full-stack web app with Flask backend and SQLite: catalog, cart-style flows, and server-rendered pages with structured Python modules.',
      zh: '基于 Flask 与 SQLite 的全栈 Web 应用，包含书目、购物车流程与模块化后端结构。',
    },
    tags: ['Flask', 'Python', 'SQLite'],
    link: 'https://github.com/cc883015/Online-Bookstore-Web-Application',
    images: ['/images/portfolio/project-bookstore.jpg'],
  },
  {
    date: '2025-10',
    displayDate: { en: 'Oct 2025', zh: '2025年10月' },
    type: 'project',
    title: {
      en: 'Multiclass vs Binary Classification (ML)',
      zh: '多分类与二分类模型对比（机器学习）',
    },
    subtitle: { en: 'Course / research project', zh: '课程与研究向项目' },
    description: {
      en: 'Compares performance of binary vs multiclass classification models on the same dataset with documented experiments and evaluation metrics.',
      zh: '在同一数据集上对比二分类与多分类模型表现，包含实验记录与评估指标分析。',
    },
    tags: ['Python', 'Machine Learning', 'Scikit-learn'],
    link: 'https://github.com/cc883015/Multiclass-vs-Binary-Comparison-in-Machine-Learning',
    images: ['/images/portfolio/project-ml-compare.jpg'],
  },
  {
    date: '2025-10',
    displayDate: { en: 'Oct 2025', zh: '2025年10月' },
    type: 'project',
    title: { en: 'Smart Indoor Mold Risk Monitor (IoT)', zh: '室内霉菌风险监测（物联网）' },
    subtitle: { en: 'BLE · MQTT · Cloud', zh: 'BLE · MQTT · 云端' },
    description: {
      en: 'Three-tier IoT system for mold-risk sensing and alerts using BLE edge devices, MQTT messaging, and cloud-side processing.',
      zh: '三层物联网架构：边缘传感、MQTT 消息与云端处理，用于室内霉菌风险监测与告警。',
    },
    tags: ['IoT', 'BLE', 'MQTT'],
    link: 'https://github.com/cc883015/Smart_Indoor_Mold_Risk_Monitor-BLE-MQTT-Cloud-',
    images: ['/images/portfolio/project-iot-mold.jpg'],
  },
  {
    date: '2025-08',
    displayDate: { en: 'Aug 2025', zh: '2025年8月' },
    type: 'project',
    title: { en: 'Hotel Employee Work Schedule System', zh: '酒店员工排班系统' },
    subtitle: { en: 'Internal operations tooling', zh: '内部运营工具' },
    description: {
      en: 'Built to streamline employee scheduling and wage tracking while working as motel manager—practical software tied to real operational needs.',
      zh: '在担任旅馆经理期间开发，用于排班与工时薪资追踪，贴近真实运营场景。',
    },
    tags: ['Web App', 'Operations', 'JavaScript'],
    link: 'https://github.com/cc883015/Hotel_Employee_Work_Sechedule_System',
    images: ['/images/portfolio/project-hotel-schedule.jpg'],
  },
  {
    date: '2025-05',
    displayDate: { en: 'May 2025', zh: '2025年5月' },
    type: 'project',
    title: { en: 'Book Review & User Manager', zh: '书评与用户管理系统' },
    subtitle: { en: 'Node.js · Express · MongoDB · React (Vite)', zh: 'Node.js · Express · MongoDB · React (Vite)' },
    description: {
      en: 'Full-stack app with JWT auth, roles (user/admin), book catalog, star ratings, moderation, and server-side pagination—MongoDB + REST API + React client.',
      zh: '全栈应用：JWT 鉴权、用户/管理员角色、书目与星级评价、审核与后端分页，MongoDB + REST + React 客户端。',
    },
    tags: ['Node.js', 'React', 'MongoDB', 'JWT'],
    link: 'https://github.com/cc883015/Book_Review_User_Manager',
    images: ['/images/portfolio/project-book-review.jpg'],
  },
  {
    date: '2025-04',
    displayDate: { en: 'Apr 2025', zh: '2025年4月' },
    type: 'project',
    title: { en: 'Product Review & Rating System', zh: '产品评价与评分系统' },
    subtitle: { en: 'Node.js + React + CI/CD + MongoDB', zh: 'Node.js + React + CI/CD + MongoDB' },
    description: {
      en: 'Assessment project: product reviews and ratings with a modern JS stack, automated pipeline hooks, and persistent document storage.',
      zh: '课程/作业项目：产品评价与打分，采用现代 JS 技术栈、CI/CD 与 MongoDB 持久化。',
    },
    tags: ['React', 'Node.js', 'MongoDB', 'CI/CD'],
    link: 'https://github.com/cc883015/Product_Review_Rating_System',
    images: ['/images/portfolio/project-product-review.jpg'],
  },
  {
    date: '2025-03',
    displayDate: { en: 'Mar 2025', zh: '2025年3月' },
    type: 'project',
    title: { en: 'Task Manager — AWS Setup (fork)', zh: '任务管理 — AWS 部署（Fork）' },
    subtitle: { en: 'Based on rajuiit/taskmanager_aws_setup', zh: '源自 rajuiit/taskmanager_aws_setup' },
    description: {
      en: 'Fork exploring AWS-oriented deployment patterns for a JavaScript task manager stack; useful reference for cloud hosting experiments.',
      zh: 'Fork 的 AWS 部署向任务管理项目，用于练习云主机与部署流程。',
    },
    tags: ['AWS', 'JavaScript', 'DevOps'],
    link: 'https://github.com/cc883015/TaskManager_Aws_setup',
    images: ['/images/portfolio/project-aws-taskmanager.jpg'],
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
