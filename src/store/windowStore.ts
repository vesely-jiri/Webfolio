import { create } from "zustand"
import type { WindowId, WindowState } from "../types/window"

interface WindowStore {
  windows: WindowState[]
  isCrashed: boolean
  isShutdown: boolean
  openWindow: (id: WindowId) => void
  closeWindow: (id: WindowId) => void
  minimizeWindow: (id: WindowId) => void
  setPosition: (id: WindowId, position: { x: number; y: number }) => void
  triggerCrash: () => void
  triggerShutdown: () => void
}

const defaultWindows: WindowState[] = [
  { id: "cmd", icon: "/icons/cmd.png", title: "Command Prompt", isOpen: false, isMinimized: false, position: { x: 100, y: 80 }, size: { width: 600, height: 400 } },
  { id: "about", icon: "/icons/full-folder.png", title: "About Me", isOpen: false, isMinimized: false, position: { x: 150, y: 100 }, size: { width: 500, height: 400 } },
  { id: "projects", icon: "/icons/full-folder.png", title: "My Projects", isOpen: false, isMinimized: false, position: { x: 200, y: 120 }, size: { width: 650, height: 450 } },
]

export const useWindowStore = create<WindowStore>((set) => ({
  windows: defaultWindows,
  isCrashed: false,
  isShutdown: false,

  openWindow: (id) => set((state) => ({
    windows: state.windows.map((w) =>
      w.id === id ? { ...w, isOpen: true, isMinimized: false } : w
    ),
  })),

  closeWindow: (id) => set((state) => ({
    windows: state.windows.map((w) =>
      w.id === id ? { ...w, isOpen: false } : w
    ),
  })),

  minimizeWindow: (id) => set((state) => ({
    windows: state.windows.map((w) =>
      w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
    ),
  })),

  setPosition: (id, position) => set((state) => ({
    windows: state.windows.map((w) =>
      w.id === id ? { ...w, position } : w
    ),
  })),

  triggerCrash: () => set({ isCrashed: true }),
  triggerShutdown: () => set({ isShutdown: true }),
}))