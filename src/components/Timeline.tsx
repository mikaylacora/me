import Card from './Card'
import './Timeline.css'

interface TimelineExperience {
  id: string
  date: string
  title: string
  company: string
  bullets: string[]
  technologies?: string[]
}

interface TimelineProps {
  experiences: TimelineExperience[]
}

export default function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {experiences.map((experience) => (
        <div key={experience.id} className="timeline-item">
          <div className="timeline-marker"></div>
          <Card
            date={experience.date}
            title={experience.title}
            subtitle={experience.company}
            bullets={experience.bullets}
            technologies={experience.technologies}
          />
        </div>
      ))}
    </div>
  )
}
