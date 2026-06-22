type SectionHeaderProps = {
  badge?: React.ReactNode
  title: React.ReactNode
  subtitle?: string
  dark?: boolean
  className?: string
}

export function SectionHeader({ badge, title, subtitle, dark = false, className = '' }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-16 reveal ${className}`}>
      {badge}
      <h2
        className={`text-4xl lg:text-5xl font-black mb-5 ${dark ? 'text-white' : ''}`}
        style={{ letterSpacing: '-0.02em', color: dark ? undefined : '#0A0F1E' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${dark ? 'text-white/55' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
