import { useWindowStore } from "../../store/windowStore"
import Window from "../Window/Window"
import CmdApp from "../apps/CmdApp/CmdApp"
import AboutApp from "../apps/AboutApp/AboutApp"
import ProjectsApp from "../apps/ProjectsApp/ProjectsApp"

function WindowManager() {
  const { windows } = useWindowStore()

  return (
    <>
      {windows.map((win) => (
        <Window key={win.id} window={win}>
          {win.id === "cmd" && <CmdApp />}
          {win.id === "about" && <AboutApp />}
          {win.id === "projects" && <ProjectsApp />}
        </Window>
      ))}
    </>
  )
}

export default WindowManager