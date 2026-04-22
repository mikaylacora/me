import meImg from './assets/me.png'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import ContactLinks from './components/ContactLinks'
import './App.css'

function App() {

  const experiences = [
    {
      id: '1',
      date: 'May 2023 - Feb 2026',
      title: 'Software Engineer',
      company: 'CLICS',
      technologies: ['Ruby on Rails', 'Angular', 'TypeScript', 'PostgreSQL', 'RSpec', 'Sidekiq', 'Third-Party Integrations'],
      bullets: [
        'Designed, built, and maintained Ruby on Rails RESTful APIs supporting full-stack workflows across client-facing production systems, third-party integrations, and real-time data synchronization.',
        'Owned end-to-end development and deployment of a cross-platform application (Angular, Ionic), building modular TypeScript components, user-facing features, and responsive layout improvements across devices',
        'Refactored backend APIs to improve performance by optimizing inefficient queries and eliminating N+1 query patterns.',
        'Wrote and executed advanced SQL queries against relational databases (PostgreSQL) to support backend services, reporting, live system troubleshooting, and bulk data validation, including complex joins and subquery optimization.',
        'Designed and implemented external point-of-sale integrations, handling secure credential storage, external API communication, client data import/export logic, and user-facing configuration workflows while coordinating directly with vendors and maintaining technical documentation.',
        'Contributed to scalable backend architecture decisions including background job processing (Sidekiq/Redis), query optimization, and CI-enforced test coverage to support high-volume production systems.',
        'Wrote and maintained automated tests (RSpec/FactoryBot, Jest) via GitHub Actions CI to validate API behavior, expand coverage, prevent regressions, and maintain system reliability.',
        'Integrated AWS S3 for photo storage, handling uploads from client-facing application submissions.',
        'Assumed primary ownership of application and integration systems after team lead retirement (June 2025), serving as the sole technical point of contact for production releases, feature delivery, and cross-team communication.',
      ]
    },
    {
      id: '2',
      date: 'January 2022 - April 2023',
      title: 'Android Mobile Developer',
      company: 'TIAA',
      bullets: [
        'Built a React proof of concept to evaluate migration from an existing Kotlin-based architecture, exploring component structure and JavaScript frontend patterns.',
        'Led development of new app workflows and reusable components, collaborating closely with the API team on feature delivery.',
        'Delivered feature enhancements and improvements for the TIAA mobile app serving a large financial customer base.',
      ]
    },
    {
      id: '3',
      date: 'January 2021 - January 2022',
      title: 'Technical Associate Website Developer',
      company: 'TIAA',
      bullets: [
        'Built Java Spring Boot web features alongside Angular on production stories, collaborating with the API team on updated endpoints.',
        'Queried relational databases, consumed GraphQL APIs, and added API responses to support web application development.',
        'Resolved bugs in the web application through debugging and log analysis.',
      ]
    },
    {
      id: '4',
      date: 'June 2020 - July 2020',
      title: 'Software Engineer Intern',
      company: 'Allstate Roadside',
      bullets: [
        'Built React and JavaScript features for a consumer web product, including a prototype evaluating alternate third-party mapping data sources.',
      ]
    },
    {
      id: '5',
      date: 'May 2019 - August 2019',
      title: 'Process Engineering Intern',
      company: 'Cree-Wolfspeed',
      bullets: [
        'Wrote SQL stored procedures to retrieve production data while improving process efficiency and coordinating across teams.',
      ]
    },
    {
      id: '6',
      date: 'Graduated December 2020',
      title: 'B.S. in Computer Engineering',
      company: 'North Carolina State University',
      bullets: []
    },
    {
      id: '7',
      date: 'July 2018 - May 2020',
      title: 'Resident Adviser',
      company: 'North Carolina State University Housing',
      bullets: [
        'Used communication skills to build personal relationships and trust with residents.',
        'Developed and coordinated educational programs for residents.',
        'Ensured a safe and inclusive living environment for all.',
        'Mediated interpersonal problems between residents.'
      ]
    }
  ]

  const projects = [
    {
      id: '1',
      name: 'This Website',
      description: 'Personal portfolio website built with React and TypeScript, featuring a timeline and project showcase.',
      technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
      link: 'https://github.com/mikaylacora/me',
      bullets: [
        'Built with React 19, TypeScript, and Vite. Chosen specifically to expand knowledge of modern web development tools.',
        'Responsive design with CSS custom properties supporting light and dark color schemes.',
        'Timeline component for displaying work experience with interactive hover states.',
      ]
    },
    {
      id: '2',
      name: 'Eco-tracking Bathroom',
      description: 'Senior Design',
      technologies: ['C', 'Embedded C', 'Hardware'],
      bullets: [
        'Designed, planned, and prototyped a system of devices to track water usage within a bathroom and report live to consumers, focused on implementing in a hotel environment.',
        'Created a manager application in C through QT platform.',
        'Managed team deadlines and maintained communication with project sponsor.'
      ]
    },
    {
      id: '3',
      name: 'RC and Self-Driving Car',
      description: 'Embedded Systems Class',
      technologies: ['Embedded C'],
      bullets: [
        'Created and programmed, in embedded C, a model car over the course of a semester.',
        'Worked through issues encountered and learned debugging practices.'
      ]
    }
  ]

  return (
    <>
      <section id="header">
        <div id="header-content">
          <div id="title">
            <h1>Mikayla Goodwin</h1>
            <h2>Software Engineer</h2>
          </div>
          <div id="right-section">
            <ContactLinks />
            <div id="me">
              <img src={meImg} className="photo" alt="Mikayla Goodwin" />
            </div>
          </div>
        </div>
      </section>

      <section id="content">
        <section id="Experience">
          <h2>Experience</h2>
          <Timeline experiences={experiences} />
        </section>
        <section id="Projects">
          <Projects projects={projects} />
        </section>
      </section>
    </>
  )
}

export default App
