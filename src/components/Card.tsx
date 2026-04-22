import './Card.css'


interface CardProps {
  date: string
  title: string
  subtitle: string
  bullets: string[]
  tech?: string[]
  link?: string
}

export default function Card({date, title, subtitle, bullets, tech, link }: CardProps) {
  return (
    <div className="timeline-card">
      <div className="timeline-date">{date}</div>
      <h3 className="timeline-title">{title}</h3>
      <h4 className="timeline-company">{subtitle}</h4>
      <p className="timeline-description">{bullets}</p>
    </div>
  )
}
