import { portfolio } from "../../../config/portfolio"

export interface CommandResult {
  output: string
  isError?: boolean
  isCrash?: boolean
}

export const commands: Record<string, () => CommandResult> = {
  help: () => ({
    output: `Available commands:
  help          - show this list
  about         - who am I
  skills        - my tech stack
  contact       - get in touch
  cls           - clear screen
  format c:     - ...dont`,
  }),

  about: () => ({
    output: `Name:     ${portfolio.name}
Role:     ${portfolio.role}
Stack:    ${portfolio.skills}
Location: Czech Republic`,
  }),

  skills: () => ({
    output: `${portfolio.skills}`,
  }),

  contact: () => ({
    output: `GitHub:   ${portfolio.links.github}
LinkedIn: ${portfolio.links.linkedin}
Email:    ${portfolio.links.email}`,
  }),

  cls: () => ({
    output: "__CLEAR__",
  }),

  "format c:": () => ({
  output: "WARNING: All data on non-removable disk\ndrive C: will be lost!\nProceed with Format (Y/N)?",
  isCrash: true,
  }),
}