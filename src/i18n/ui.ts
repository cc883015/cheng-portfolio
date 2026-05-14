import type { L10n } from './utils'
import type { TimelineItem } from '../data/portfolio'

/** Queensland Government — site-wide nav CTA (label kept in English per design). */
export const navBrisbaneCta = {
  href: 'https://www.qld.gov.au/',
  label: {
    en: 'Dedicate to the Better Brisbane',
    zh: 'Dedicate to the Better Brisbane',
  } satisfies L10n,
}

export const navLabels: Record<string, L10n> = {
  brandHome: { en: 'Home page', zh: '首页' },
  about: { en: 'About', zh: '关于' },
  education: { en: 'Education', zh: '教育' },
  awards: { en: 'Awards', zh: '奖项' },
  work: { en: 'Work', zh: '工作' },
  projects: { en: 'Projects', zh: '项目' },
  certifications: { en: 'Certificates', zh: '证书' },
  skills: { en: 'Skills', zh: '技能' },
  blog: { en: 'Blog', zh: '博客' },
  contact: { en: 'Contact', zh: '联系' },
}

export const heroUi: {
  badge: L10n
  greeting: L10n
  scroll: L10n
  aka: L10n
  taglineExtra: L10n
} = {
  badge: { en: 'AVAILABLE FOR OPPORTUNITIES', zh: '欢迎合作与机会' },
  greeting: { en: '> hello_world —user', zh: '> hello_world —用户' },
  scroll: { en: 'SCROLL', zh: '下滑' },
  aka: { en: 'aka', zh: '亦称' },
  taglineExtra: {
    en: 'AI · IELTS · PTE — explore, learn, discuss — always open to chat',
    zh: 'AI · 雅思 · PTE — 探索钻研 — 欢迎讨论',
  },
}

export type YearPlanStatus = 'done' | 'progress' | 'planned'

export const aboutUi: {
  sectionNum: L10n
  sectionTitle: L10n
  headline: L10n
  galleryLabel: L10n
  yearPlanTitle: L10n
  yearPlanItems: { id: string; label: L10n; status: YearPlanStatus }[]
  stats: { label: L10n; value: L10n; detail: L10n }[]
} = {
  sectionNum: { en: '01', zh: '01' },
  sectionTitle: { en: 'ABOUT', zh: '关于' },
  headline: {
    en: 'Committed to delivering better digital experiences for clients.',
    zh: '致力于为客户打造更好的数字体验。',
  },
  galleryLabel: { en: 'GALLERY', zh: '附图' },
  yearPlanTitle: {
    en: 'Certification & postgraduate roadmap',
    zh: '证书与升学规划',
  },
  yearPlanItems: [
    {
      id: 'qut',
      label: {
        en: 'QUT — Master of IT (Cybersecurity) · Jul 2024 – Jun 2026',
        zh: 'QUT — 信息技术硕士（网络安全）· 2024年7月 – 2026年6月',
      },
      status: 'progress',
    },
    {
      id: 'scu-hotel',
      label: {
        en: 'Southern Cross University — Graduate Diploma in Hotel Leadership · 2026–2027',
        zh: '南十字星大学 — 酒店管理领导力研究生文凭 · 2026–2027',
      },
      status: 'planned',
    },
    {
      id: 'gt-omscs',
      label: {
        en: 'Georgia Tech — MS Computer Science (AI) · OMSCS · 2028–2031',
        zh: '佐治亚理工 — 计算机科学硕士（AI）· OMSCS · 2028–2031',
      },
      status: 'planned',
    },
    {
      id: 'gits',
      label: { en: 'Google IT Support Professional Certificate · 2026', zh: 'Google IT Support 专业证书 · 2026' },
      status: 'done',
    },
    {
      id: 'gcsec',
      label: { en: 'Google Cybersecurity Professional Certificate · target 2026', zh: 'Google Cybersecurity 专业证书 · 目标 2026' },
      status: 'progress',
    },
    {
      id: 'az900',
      label: { en: 'Microsoft AZ-900 — Azure Fundamentals · target 2026', zh: 'Microsoft AZ-900 — Azure 基础 · 目标 2026' },
      status: 'progress',
    },
    {
      id: 'sc900',
      label: { en: 'Microsoft SC-900 — Security & Identity Fundamentals · target 2026', zh: 'Microsoft SC-900 — 安全与身份基础 · 目标 2026' },
      status: 'planned',
    },
    {
      id: 'ccst',
      label: { en: 'Cisco CCST Networking · target 2027', zh: 'Cisco CCST Networking · 目标 2027' },
      status: 'planned',
    },
    {
      id: 'techplus',
      label: { en: 'CompTIA Tech+ · target 2027', zh: 'CompTIA Tech+ · 目标 2027' },
      status: 'planned',
    },
    {
      id: 'az104',
      label: { en: 'Microsoft AZ-104 — Azure Administrator · target 2027', zh: 'Microsoft AZ-104 — Azure 管理员 · 目标 2027' },
      status: 'planned',
    },
    {
      id: 'ccna',
      label: { en: 'Cisco CCNA · target 2028', zh: 'Cisco CCNA · 目标 2028' },
      status: 'planned',
    },
    {
      id: 'aplus',
      label: { en: 'CompTIA A+ · target 2028', zh: 'CompTIA A+ · 目标 2028' },
      status: 'planned',
    },
    {
      id: 'secplus',
      label: { en: 'CompTIA Security+ · target 2029', zh: 'CompTIA Security+ · 目标 2029' },
      status: 'planned',
    },
    {
      id: 'ccnp',
      label: { en: 'Cisco CCNP · target 2030', zh: 'Cisco CCNP · 目标 2030' },
      status: 'planned',
    },
  ],
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

export const awardsUi: {
  sectionNum: L10n
  sectionTitle: L10n
  headline: L10n
  viewLink: L10n
  linkedInCta: L10n
} = {
  sectionNum: { en: '03', zh: '03' },
  sectionTitle: { en: 'AWARDS', zh: '奖项' },
  headline: { en: 'Awards & honors', zh: '奖项与荣誉' },
  viewLink: { en: 'Link', zh: '链接' },
  linkedInCta: { en: 'Open LinkedIn profile', zh: '打开领英主页' },
}

export const journeyUi = {
  sections: {
    education: {
      id: 'education' as const,
      sectionNum: { en: '02', zh: '02' } satisfies L10n,
      sectionTitle: { en: 'EDUCATION', zh: '教育' } satisfies L10n,
      headline: { en: 'Education', zh: '教育背景' } satisfies L10n,
    },
    work: {
      id: 'work' as const,
      sectionNum: { en: '04', zh: '04' } satisfies L10n,
      sectionTitle: { en: 'WORK', zh: '工作' } satisfies L10n,
      headline: { en: 'Work experience', zh: '工作经历' } satisfies L10n,
    },
    projects: {
      id: 'projects' as const,
      sectionNum: { en: '05', zh: '05' } satisfies L10n,
      sectionTitle: { en: 'PROJECTS', zh: '项目' } satisfies L10n,
      headline: { en: 'Projects', zh: '项目经历' } satisfies L10n,
    },
    certs: {
      id: 'certifications' as const,
      sectionNum: { en: '06', zh: '06' } satisfies L10n,
      sectionTitle: { en: 'CERTIFICATIONS', zh: '证书' } satisfies L10n,
      headline: { en: 'Professional certificates', zh: '专业证书' } satisfies L10n,
    },
  },
} as const

export type JourneySectionKey = keyof typeof journeyUi.sections

export const timelineUi: {
  viewLink: L10n
  watchDemo: L10n
  repoLink: L10n
  typeLabels: Record<TimelineItem['type'], L10n>
} = {
  viewLink: { en: 'View', zh: '查看' },
  watchDemo: { en: 'Watch demo', zh: '观看演示' },
  repoLink: { en: 'GitHub', zh: 'GitHub' },
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
  sectionNum: { en: '07', zh: '07' },
  sectionTitle: { en: 'SKILLS', zh: '技能' },
  headline: { en: 'Tech stack', zh: '技术栈' },
}

export const blogUi: {
  sectionNum: L10n
  sectionTitle: L10n
  headline: L10n
  readPost: L10n
} = {
  sectionNum: { en: '08', zh: '08' },
  sectionTitle: { en: 'BLOG', zh: '博客' },
  headline: { en: 'Blog & technical notes', zh: '博客与技术随笔' },
  readPost: { en: 'Read', zh: '阅读' },
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
  sectionNum: { en: '09', zh: '09' },
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
