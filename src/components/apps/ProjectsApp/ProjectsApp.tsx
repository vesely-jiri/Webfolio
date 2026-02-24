import { portfolio } from "../../../config/portfolio"
import "./ProjectsApp.css"

interface Project {
  name: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

const projects: Project[] = portfolio.projects

function ProjectsApp() {
  return (
    <div className="projects">
      {projects.map((project) => (
        <div key={project.name} className="project-card">
          <div className="project-header">
            <h2 className="project-name">{project.name}</h2>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
              )}
            </div>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="project-tags">
            {project.tags.map(tag => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectsApp