import { useRef, useEffect } from "react"
import type { WindowState } from "../../types/window"
import { useWindowStore } from "../../store/windowStore"
import "./Window.css"

interface Props {
  window: WindowState
  children: React.ReactNode
}

function Window({ window: win, children }: Props) {
  const { closeWindow, minimizeWindow, setPosition } = useWindowStore()
  const isDragging = useRef(false)
  const dragOffset = useRef({ x: 0, y: 0 })

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    dragOffset.current = {
      x: e.clientX - win.position.x,
      y: e.clientY - win.position.y,
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      setPosition(win.id, {
        x: e.clientX - dragOffset.current.x,
        y: e.clientY - dragOffset.current.y,
      })
    }

    const handleMouseUp = () => {
      isDragging.current = false
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [win.id, setPosition])

  if (!win.isOpen || win.isMinimized) return null

  return (
    <div
      className="window"
      style={{
        left: win.position.x,
        top: win.position.y,
        width: win.size.width,
        height: win.size.height,
      }}
    >
            <div className="window-titlebar" onMouseDown={handleMouseDown}>
        <div className="window-title-left">
          <img src={win.icon} alt="" className="window-title-icon" />
          <span className="window-title">{win.title}</span>
        </div>
        <div className="window-controls">
          <button onClick={() => minimizeWindow(win.id)} className="btn-minimize">_</button>
          <button onClick={() => closeWindow(win.id)} className="btn-close">✕</button>
        </div>
      </div>
      <div className="window-content">
        {children}
      </div>
    </div>
  )
}

export default Window