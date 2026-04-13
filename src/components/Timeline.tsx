import './Timeline.css'

interface TimelineJob {
  id: string
  date: string
  title: string
  company: string
  description: string
}

interface TimelineProps {
  jobs: TimelineJob[]
}

export default function Timeline({ jobs }: TimelineProps) {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      <div className="timeline-content">
        {jobs.map((job, index) => (
          <div
            key={job.id}
            className={"timeline-item"}
          >
            <div className="timeline-marker"></div>
            <div className="timeline-card">
              <div className="timeline-date">{job.date}</div>
              <h3 className="timeline-title">{job.title}</h3>
              <h4 className="timeline-company">{job.company}</h4>
              <p className="timeline-description">{job.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
