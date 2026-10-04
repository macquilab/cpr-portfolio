interface SectionHeadingProps {
  eyebrow: string
  title: string
  body?: string
}

export function SectionHeading({ eyebrow, title, body }: SectionHeadingProps) {
  return (
    <div className="section-heading reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {body && <p className="section-intro">{body}</p>}
    </div>
  )
}
