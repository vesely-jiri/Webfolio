import type { WindowId } from "../../types/window"
import { useWindowStore } from "../../store/windowStore"
import "./DesktopIcon.css"

interface Props {
  id: WindowId
  label: string
  icon: string
}

function DesktopIcon({ id, label, icon }: Props) {
  const { openWindow } = useWindowStore()

  return (
    <div className="desktop-icon" onDoubleClick={() => openWindow(id)}>
      <img src={icon} alt={label} className="desktop-icon-img" />
      <span className="desktop-icon-label">{label}</span>
    </div>
  )
}

export default DesktopIcon