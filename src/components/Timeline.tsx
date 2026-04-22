import Card from './Card'
import './Timeline.css'

interface TimelineJob {
  id: string
  date: string
  title: string
  company: string
  bullets: string[]
  tech?: string[]
}

interface TimelineProps {
  jobs: TimelineJob[]
}

export default function Timeline({ jobs }: TimelineProps) {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      {jobs.map((job) => (
        <div key={job.id} className="timeline-item">
          <div className="timeline-marker"></div>
          <Card
            date={job.date}
            title={job.title}
            subtitle={job.company}
            bullets={job.bullets}
            tech={job.tech}
          />
        </div>
      ))}
    </div>
  )
}
