import { useEffect, useRef, useState } from "react"
import { useWindowStore } from "../../store/windowStore"
import StartMenu from "../StartMenu/StartMenu"
import "./Taskbar.css"

function Taskbar() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit" })
  )
  const [startOpen, setStartOpen] = useState(false)
  const startRef = useRef<HTMLDivElement>(null)
  const { windows, minimizeWindow, openWindow } = useWindowStore()
  const openWindows = windows.filter(w => w.isOpen)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit" }))
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (startRef.current && !startRef.current.contains(e.target as Node)) {
        setStartOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleTaskbarClick = (id: typeof windows[0]["id"]) => {
    const win = windows.find(w => w.id === id)
    if (!win) return
    if (win.isMinimized) openWindow(id)
    else minimizeWindow(id)
  }

  return (
    <div className="taskbar">
      <div ref={startRef}>
        <button className="start-button" onClick={() => setStartOpen(prev => !prev)}>
          <img src="/icons/windows-startbar.png" alt="Start" className="start-logo" />
          <span>Start</span>
        </button>
        {startOpen && <StartMenu onClose={() => setStartOpen(false)} />}
      </div>
      <div className="taskbar-items">
        {openWindows.map(win => (
          <button
            key={win.id}
            className={`taskbar-item ${win.isMinimized ? "" : "taskbar-item--active"}`}
            onClick={() => handleTaskbarClick(win.id)}
          >
            {win.title}
          </button>
        ))}
      </div>
      <div className="taskbar-clock">{time}</div>
    </div>
  )
}

export default Taskbar