import Card from './Card'
import './Projects.css'

interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  link?: string
  bullets: string[]
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <Card
          key={project.id}
          date=""
          title={project.name}
          subtitle=""
          bullets={project.bullets}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </div>
  )
}
