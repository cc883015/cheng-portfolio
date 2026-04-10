import type { L10n } from './utils'
import type { TimelineItem } from '../data/portfolio'

export const navLabels: Record<string, L10n> = {
  home: { en: 'Home', zh: '首页' },
  about: { en: 'About', zh: '关于' },
  updates: { en: 'Updates', zh: '动态' },
  timeline: { en: 'Timeline', zh: '履历' },
  skills: { en: 'Skills', zh: '技能' },
  contact: { en: 'Contact', zh: '联系' },
  resume: { en: 'Resume', zh: '简历' },
  certVault: { en: 'Certificates', zh: '证书库' },
}

export const heroUi: {
  badge: L10n
  greeting: L10n
  scroll: L10n
  aka: L10n
} = {
  badge: { en: 'AVAILABLE FOR OPPORTUNITIES', zh: '欢迎合作与机会' },
  greeting: { en: '> hello_world —user', zh: '> hello_world —用户' },
  scroll: { en: 'SCROLL', zh: '下滑' },
  aka: { en: 'aka', zh: '亦称' },
}

export const aboutUi: {
  sectionNum: L10n
  sectionTitle: L10n
  headline1: L10n
  headline2: L10n
  galleryLabel: L10n
  stats: { label: L10n; value: L10n; detail: L10n }[]
} = {
  sectionNum: { en: '01', zh: '01' },
  sectionTitle: { en: 'ABOUT', zh: '关于' },
  headline1: { en: 'Building secure systems,', zh: '构建可靠、安全的系统，' },
  headline2: { en: 'crafting digital experiences.', zh: '打磨流畅的数字体验。' },
  galleryLabel: { en: 'GALLERY', zh: '附图' },
  stats: [
    {
      label: { en: 'Education', zh: '教育' },
      value: { en: 'M.IT Cybersecurity', zh: '信息技术硕士（网络安全）' },
      detail: { en: 'QUT — Class of 2026', zh: '昆士兰科技大学 — 2026 届' },
    },
    {
      label: { en: 'Focus', zh: '方向' },
      value: { en: 'Security, AI coding & ISP', zh: '安全、AI 编程与影像 ISP' },
      detail: { en: 'From camera bring-up to secure systems', zh: '从影像调试到安全与系统' },
    },
    {
      label: { en: 'Background', zh: '背景' },
      value: { en: 'Software engineering + Economics', zh: '软件工程 + 经济学' },
      detail: { en: "Bachelor's — China", zh: '本科 — 中国' },
    },
  ],
}

export const updatesUi: {
  sectionNum: L10n
  sectionTitle: L10n
  headline: L10n
  sub: L10n
  viewLink: L10n
  linkedInCta: L10n
} = {
  sectionNum: { en: '02', zh: '02' },
  sectionTitle: { en: 'UPDATES', zh: '个人动态' },
  headline: { en: 'Honors & highlights', zh: '荣誉与动态' },
  sub: {
    en: 'Awards and honors (mirroring my LinkedIn profile). Add or edit entries in portfolio.ts → linkedInHighlights.',
    zh: '荣誉与奖项（与领英「荣誉奖项」对应）。在 portfolio.ts 的 linkedInHighlights 数组中增删或修改条目。',
  },
  viewLink: { en: 'Link', zh: '链接' },
  linkedInCta: { en: 'Open LinkedIn profile', zh: '打开领英主页' },
}

export const timelineUi: {
  sectionNum: L10n
  sectionTitle: L10n
  headline: L10n
  sub: L10n
  viewLink: L10n
  typeLabels: Record<TimelineItem['type'], L10n>
} = {
  sectionNum: { en: '03', zh: '03' },
  sectionTitle: { en: 'TIMELINE', zh: '履历时间线' },
  headline: { en: 'Journey so far', zh: '经历与项目' },
  sub: {
    en: 'Work experience, certifications, projects, and education — most recent first.',
    zh: '工作、证书、项目与教育背景，按时间倒序排列。',
  },
  viewLink: { en: 'View', zh: '查看' },
  typeLabels: {
    work: { en: 'Work', zh: '工作' },
    cert: { en: 'Certificate', zh: '证书' },
    award: { en: 'Award', zh: '荣誉' },
    project: { en: 'Project', zh: '项目' },
    education: { en: 'Education', zh: '教育' },
  },
}

export const skillsUi: {
  sectionNum: L10n
  sectionTitle: L10n
  headline: L10n
} = {
  sectionNum: { en: '04', zh: '04' },
  sectionTitle: { en: 'SKILLS', zh: '技能' },
  headline: { en: 'Tech stack', zh: '技术栈' },
}

export const certificatesPageUi: {
  kicker: L10n
  title: L10n
  intro: L10n
  backHome: L10n
  exportJson: L10n
  dropHint: L10n
  limits: L10n
  empty: L10n
  titlePlaceholder: L10n
  errTooLarge: L10n
  errMaxItems: L10n
  errRead: L10n
} = {
  kicker: { en: 'VAULT', zh: '证书库' },
  title: { en: 'Certificate gallery', zh: '证书与证明文件' },
  intro: {
    en: 'Upload images of diplomas, badges, or screenshots. Drag cards to reorder. Data is saved only in this browser (localStorage). Export JSON as a backup before clearing browser data.',
    zh: '在此上传各类证书、徽章或截图。拖拽卡片可调整顺序。数据仅保存在本机浏览器（localStorage）；清理浏览器数据前请用「导出 JSON」备份。',
  },
  backHome: { en: 'Back to portfolio', zh: '返回主页' },
  exportJson: { en: 'Export JSON backup', zh: '导出 JSON 备份' },
  dropHint: { en: 'Click or drop images here', zh: '点击或拖入图片' },
  limits: {
    en: 'Up to {n} items · max {mb} MB each · browser only',
    zh: '最多 {n} 张 · 单张不超过 {mb} MB · 仅本机保存',
  },
  empty: { en: 'No certificates yet — upload above.', zh: '暂无证书，请在上方上传。' },
  titlePlaceholder: { en: 'Label / title', zh: '证书名称（可编辑）' },
  errTooLarge: { en: 'File too large (max 2.5 MB).', zh: '文件过大（单张上限 2.5 MB）。' },
  errMaxItems: { en: 'Maximum number of items reached.', zh: '已达到最大张数上限。' },
  errRead: { en: 'Could not read file.', zh: '无法读取该文件。' },
}

export const contactUi: {
  sectionNum: L10n
  sectionTitle: L10n
  headline1: L10n
  headline2: L10n
  body: L10n
  cta: L10n
  footerTech: L10n
} = {
  sectionNum: { en: '05', zh: '05' },
  sectionTitle: { en: 'CONTACT', zh: '联系' },
  headline1: { en: "Let's build something", zh: '期待与您' },
  headline2: { en: 'together.', zh: '共同打造。' },
  body: {
    en: "Whether it's cybersecurity, full-stack development, or a technical discussion — I'd love to hear from you.",
    zh: '无论是网络安全、全栈开发还是技术交流，都欢迎与我联系。',
  },
  cta: { en: 'Get in Touch', zh: '发送邮件' },
  footerTech: { en: 'Built with React + TypeScript + Tailwind', zh: '使用 React + TypeScript + Tailwind 构建' },
}
