export type Lang = 'en' | 'zh'

export type L10n = { en: string; zh: string }

export function t(s: L10n, lang: Lang): string {
  return s[lang]
}
