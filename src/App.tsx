import ShutdownScreen from "./components/ShutdownScreen/ShutdownScreen"
import { useState, useCallback } from "react"
import BootScreen from "./components/BootScreen/BootScreen"
import Desktop from "./components/Desktop/Desktop"

import CrashScreen from "./components/CrashScreen/CrashScreen"
import { useWindowStore } from "./store/windowStore"

function App() {
  const [booted, setBooted] = useState(false)
  const handleBooted = useCallback(() => setBooted(true), [])
  const { isCrashed, isShutdown } = useWindowStore()

  return (
  <div className="room">
    {isShutdown && <ShutdownScreen />}
    {isCrashed && <CrashScreen />}
    {!booted && <BootScreen onFinished={handleBooted} />}
    {booted && <Desktop />}
  </div>
  )
}

export default App