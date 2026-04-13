import githubimg from '../assets/github.png'
import linkedinimg from '../assets/linkedin.png'
import emailimg from '../assets/email.png'
import ContactLink from './ContactLink'
import './ContactLinks.css'

export default function ContactLinks() {
  return (
    <div className="contact-links">
      <ContactLink
        icon={githubimg}
        label="GitHub"
        url="https://github.com/mikaylacora"
      />
      <ContactLink
        icon={linkedinimg}
        label="LinkedIn"
        url="https://linkedin.com/in/mikgoodwin"
      />
      <ContactLink
        icon={emailimg}
        label="Email"
        url="mailto:mikaylacora@gmail.com"
        isEmail={true}
      />
    </div>
  )
}
