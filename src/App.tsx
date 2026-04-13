import meImg from './assets/me.png'
import Timeline from './components/Timeline'
import ContactLinks from './components/ContactLinks'
import './App.css'

function App() {

  const jobs = [
    {
      id: '1',
      date: 'May 2023 - Feb 2023',
      title: 'Software Engineer',
      company: 'CLICS',
      description: 'Details'
    },
    {
      id: '2',
      date: '2021 - 2023',
      title: 'Software Engineer',
      company: 'Innovation Labs',
      description: 'Developed full-stack applications using React, TypeScript, and Node.js.'
    },
    {
      id: '3',
      date: '2019 - 2021',
      title: 'Junior Developer',
      company: 'StartUp Co',
      description: 'Built responsive web applications and improved application performance.'
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

      <section id="Experience">
        <h2>Experience</h2>
        <Timeline jobs={jobs} />
      </section>
    </>
  )
}

export default App
