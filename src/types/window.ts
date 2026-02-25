export type WindowId = "cmd" | "about" | "projects"

export interface WindowState {
  id: WindowId
  icon: string
  title: string
  isOpen: boolean
  isMinimized: boolean
  position: { x: number; y: number }
  size: { width: number; height: number }
}