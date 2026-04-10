export type UserCertificate = {
  id: string
  src: string
  title: string
  createdAt: number
}

const LS_KEY = 'charles-portfolio-user-certificates-v1'

export function loadUserCertificates(): UserCertificate[] {
  try {
    const raw = localStorage.getItem(LS_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (x): x is UserCertificate =>
        typeof x === 'object' &&
        x !== null &&
        typeof (x as UserCertificate).id === 'string' &&
        typeof (x as UserCertificate).src === 'string',
    )
  } catch {
    return []
  }
}

export function saveUserCertificates(items: UserCertificate[]) {
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(items))
  } catch (e) {
    console.warn('Could not save certificates (storage full?)', e)
  }
}

export function exportCertificatesJson(items: UserCertificate[]): string {
  return JSON.stringify(items, null, 2)
}
