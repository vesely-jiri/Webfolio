import { useEffect, useState } from "react"
import "./BootScreen.css"

interface Props {
  onFinished: () => void
}

function BootScreen({ onFinished }: Props) {
  const [progress, setProgress] = useState(0)

useEffect(() => {
  const delay = setTimeout(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onFinished, 500)
          return 100
        }
        return prev + 4
      })
    }, 100)

    return () => clearInterval(interval)
  }, 2500)

  return () => clearTimeout(delay)
}, [onFinished])

  return (
    <div className="boot-screen">
      <img src="/icons/windows-bootscreen.png" alt="Windows XP" className="boot-logo" />
      <div className="boot-bar-wrapper">
        <div className="boot-bar">
          <div className="boot-bar-fill" style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
      </div>
    </div>
  )
}

export default BootScreen