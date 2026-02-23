import Taskbar from "../Taskbar/Taskbar"
import WindowManager from "../WindowManager/WindowManager"
import DesktopIcon from "./DesktopIcon"
import "./Desktop.css"

function Desktop() {
  return (
    <div className="desktop">
      <img src="/wallpaper.webp" className="desktop-wallpaper" alt="" />
      <div className="desktop-icons">
        <DesktopIcon id="cmd" label="Command Prompt" icon="/icons/cmd.png" />
        <DesktopIcon id="about" label="About Me" icon="/icons/about.png" />
        <DesktopIcon id="projects" label="My Projects" icon="/icons/about.png" />
      </div>
      <WindowManager />
      <Taskbar />
    </div>
  )
}

export default Desktop