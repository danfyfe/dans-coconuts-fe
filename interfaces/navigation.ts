import { MouseEventHandler } from "react"

export interface HamburgerProps {
  onClick: MouseEventHandler<HTMLButtonElement>,
  open: boolean
}

export interface NavProps {
  open: boolean;
}