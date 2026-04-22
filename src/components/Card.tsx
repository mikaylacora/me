import './Card.css'


interface CardProps {
  date: string
  title: string
  subtitle: string
  bullets: string[]
  technologies?: string[]
  link?: string
}

export default function Card({date, title, subtitle, bullets, technologies, link }: CardProps) {
  return (
    <div className="card">
      <div className="date">{date}</div>
      <h3 className="title">{title}</h3>
      <h4 className="company">{subtitle}</h4>
      {technologies && technologies.length > 0 && (
        <div className="technologies">
          {technologies.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>
      )}
      {bullets.length > 0 && (
        <ul className="bullets">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>
      )}
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          View Github →
        </a>
      )}
    </div>
  )
}
