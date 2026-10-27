export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'dark',
  className = '',
}) {
  const isDark = theme === 'dark'
  const isCenter = align === 'center'

  return (
    <div
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 border ${
            isDark
              ? 'bg-panel/80 text-teal border-line'
              : 'bg-white text-blue-strong border-slate-200 shadow-xs'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal" />
          {eyebrow}
        </div>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${
          isDark ? 'text-text' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-muted' : 'text-subtle'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
