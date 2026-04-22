import { useState } from 'react'
import meImg from './assets/me.png'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Tabs from './components/Tabs'
import ContactLinks from './components/ContactLinks'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('experience')

  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ]

  const jobs = [
    {
      id: '1',
      date: 'May 2023 - Feb 2023',
      title: 'Software Engineer',
      company: 'CLICS',
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
      date: 'January 2022 – April 2023',
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
      date: 'January 2021 – January 2022',
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
      date: 'June 2020 – July 2020',
      title: 'Software Engineer Intern',
      company: 'Allstate Roadside',
      bullets: [
        'Built React and JavaScript features for a consumer web product, including a prototype evaluating alternate third-party mapping data sources.',
      ]
    },
    {
      id: '5',
      date: 'May 2019 – August 2019',
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
    }
  ]

  const projects = [
    {
      id: '1',
      name: 'Portfolio Website',
      description: 'Personal portfolio website built with React and TypeScript, featuring a responsive timeline and project showcase.',
      tech: ['React', 'TypeScript', 'Vite', 'CSS'],
      link: 'https://github.com/mikaylacora/me',
      bullets: [
        'Built with React 19, TypeScript, and Vite for fast development and hot module reloading.',
        'Responsive design with CSS custom properties supporting light and dark color schemes.',
        'Timeline component for displaying work experience with interactive hover states.',
      ]
    },
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
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
        {activeTab === 'experience' && (
          <section id="Experience">
            <Timeline jobs={jobs} />
          </section>
        )}
        {activeTab === 'projects' && (
          <section id="Projects">
            <Projects projects={projects} />
          </section>
        )}
      </section>
    </>
  )
}

export default App
