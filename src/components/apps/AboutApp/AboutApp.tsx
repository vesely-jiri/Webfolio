import{ portfolio } from "../../../config/portfolio"
import "./AboutApp.css"

function AboutApp() {
  return (
    <div className="about">
      <div className="about-header">
        <img src="/icons/about.png" alt="avatar" className="about-avatar" />
        <div>
          <h1 className="about-name">{portfolio.name}</h1>
          <p className="about-role">{portfolio.role}</p>
        </div>
      </div>

      <div className="about-section">
        <h2>O mně</h2>
        <p>{portfolio.bio}</p>
      </div>

      <div className="about-section">
        <h2>Stack</h2>
        <div className="about-tags">
          {portfolio.skills.map(tag => (
            <span key={tag} className="about-tag">{tag}</span>
          ))}
        </div>
      </div>

      <div className="about-section">
        <h2>Kontakt</h2>
        <div className="about-links">
          <a href={portfolio.links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={portfolio.links.email} target="_blank" rel="noreferrer">Email</a>
        </div>
      </div>
    </div>
  )
}

export default AboutApp