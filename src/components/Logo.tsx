interface LogoProps {
  className?: string
  labelled?: boolean
}

export function Logo({ className = '', labelled = true }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 148 58"
      role={labelled ? 'img' : undefined}
      aria-label={labelled ? 'CPR monogram' : undefined}
      aria-hidden={labelled ? undefined : true}
    >
      <path className="logo-stroke" d="M31 8H19C11 8 6 16 6 29s5 21 13 21h12" />
      <path className="logo-stroke" d="M42 50V8h19c11 0 17 7 17 16S72 40 61 40H43" />
      <path className="logo-stroke" d="M89 50V8h19c11 0 17 6 17 15 0 8-6 14-17 14H90" />
      <path className="logo-stroke" d="m109 37 17 13" />
      <path className="logo-play" d="m57 19 12 7-12 7V19Z" />
      <path className="logo-cut" d="M137 8v42" />
    </svg>
  )
}
