import type { ElementType, ReactNode } from 'react'

type Props = {
  Icon: ElementType
  children: ReactNode
  className?: string
  /** 联系区块：图标在上、标题居中 */
  variant?: 'default' | 'centered'
}

export default function SectionHeadline({
  Icon,
  children,
  className = '',
  variant = 'default',
}: Props) {
  const iconBox = (
    <span
      className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] text-cyber shadow-[0_8px_28px_rgba(0,0,0,0.35)] backdrop-blur-md"
      aria-hidden
    >
      <Icon className="h-[1.15rem] w-[1.15rem] sm:h-6 sm:w-6" strokeWidth={1.75} />
    </span>
  )

  if (variant === 'centered') {
    return (
      <h2
        className={`mb-6 flex flex-col items-center gap-4 text-3xl sm:text-5xl font-bold text-white ${className}`}
        style={{ fontFamily: '"Space Grotesk", system-ui' }}
      >
        {iconBox}
        <span className="text-center leading-tight">{children}</span>
      </h2>
    )
  }

  return (
    <h2
      className={`mb-12 flex items-start gap-3 sm:mb-14 sm:items-center sm:gap-4 text-3xl sm:text-4xl font-bold text-white ${className}`}
      style={{ fontFamily: '"Space Grotesk", system-ui' }}
    >
      {iconBox}
      <span className="min-w-0 leading-tight">{children}</span>
    </h2>
  )
}
