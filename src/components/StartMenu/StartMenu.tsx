import { portfolio } from "../../config/portfolio"
import { useWindowStore } from "../../store/windowStore"
import "./StartMenu.css"

interface Props {
  onClose: () => void
}

function StartMenu({ onClose }: Props) {
  const { openWindow, triggerShutdown } = useWindowStore()

  const handleOpen = (id: Parameters<typeof openWindow>[0]) => {
    openWindow(id)
    onClose()
  }

  return (
    <div className="start-menu">
      <div className="start-menu-header">
        <img src="/icons/about.png" alt="avatar" className="start-menu-avatar" />
        <span className="start-menu-username">{portfolio.name}</span>
      </div>

      <div className="start-menu-body">
        <div className="start-menu-left">
          <button className="start-menu-item" onClick={() => handleOpen("cmd")}>
            <img src="/icons/cmd.png" alt="" />
            <span>Command Prompt</span>
          </button>
          <button className="start-menu-item" onClick={() => handleOpen("about")}>
            <img src="/icons/about.png" alt="" />
            <span>About Me</span>
          </button>
          <button className="start-menu-item" onClick={() => handleOpen("projects")}>
            <img src="/icons/about.png" alt="" />
            <span>My Projects</span>
          </button>
        </div>

        <div className="start-menu-right">
          <a href={portfolio.links.github} target="_blank" rel="noreferrer" className="start-menu-link">
            GitHub
          </a>
          <a href={portfolio.links.linkedin} target="_blank" rel="noreferrer" className="start-menu-link">
            LinkedIn
          </a>
          <div className="start-menu-divider" />
          <button className="start-menu-link start-menu-shutdown" onClick={triggerShutdown}>
            <img src="/icons/shutdown.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default StartMenu