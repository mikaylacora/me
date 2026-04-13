import './ContactLink.css'

interface ContactLinkProps {
  icon: string
  label: string
  url: string
  isEmail?: boolean
}

export default function ContactLink({ icon, label, url, isEmail }: ContactLinkProps) {
  return (
    <a
      href={url}
      className="contact-button"
      title={label}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
    >
      <img src={icon} alt={label} />
      <span>{label}</span>
    </a>
  )
}
