import { useState, useRef, useEffect } from "react"
import { commands } from "./commands"
import { useWindowStore } from "../../../store/windowStore"
import "./CmdApp.css"

interface HistoryEntry {
  input: string
  output: string
  isError?: boolean
}

function CmdApp() {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { input: "", output: 'Microsoft Windows XP [Version 5.1.2600]\nType "help" for available commands.' },
  ])
  const [input, setInput] = useState("")
  const [awaitingFormat, setAwaitingFormat] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const { triggerCrash } = useWindowStore()

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [history])

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") return

    const trimmed = input.trim().toLowerCase()

    if (trimmed === "") {
      setInput("")
      return
    }

    // Čekáme na Y/N po format c:
    if (awaitingFormat) {
      if (trimmed === "y") {
        setHistory(prev => [...prev, { input: "y", output: "Formatting C:\\ ..." }])
        setAwaitingFormat(false)
        setInput("")
        setTimeout(triggerCrash, 1500)
        return
      } else {
        setHistory(prev => [...prev, { input: trimmed, output: "Format cancelled." }])
        setAwaitingFormat(false)
        setInput("")
        return
      }
    }

    // format c: command
    if (trimmed === "format c:") {
      setHistory(prev => [...prev, {
        input: trimmed,
        output: "WARNING: All data on non-removable disk\ndrive C: will be lost!\nProceed with Format (Y/N)?",
      }])
      setAwaitingFormat(true)
      setInput("")
      return
    }

    const command = commands[trimmed]

    if (!command) {
      setHistory(prev => [...prev, {
        input: trimmed,
        output: `'${trimmed}' is not recognized as an internal or external command.`,
        isError: true,
      }])
      setInput("")
      return
    }

    const result = command()

    if (result.output === "__CLEAR__") {
      setHistory([])
      setInput("")
      return
    }

    setHistory(prev => [...prev, {
      input: trimmed,
      output: result.output,
      isError: result.isError,
    }])

    setInput("")
  }

  return (
    <div className="cmd">
      {history.map((entry, i) => (
        <div key={i}>
          {entry.input && <div className="cmd-input-line">C:\&gt; {entry.input}</div>}
          <pre className={`cmd-output ${entry.isError ? "cmd-error" : ""}`}>{entry.output}</pre>
        </div>
      ))}
      <div className="cmd-input-row">
        <span>C:\&gt;&nbsp;</span>
        <input
          className="cmd-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleCommand}
          autoFocus
          spellCheck={false}
        />
      </div>
      <div ref={bottomRef} />
    </div>
  )
}

export default CmdApp