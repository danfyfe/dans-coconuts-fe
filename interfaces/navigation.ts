import { MouseEventHandler } from "react"

export interface IHamburgerProps {
  onClick: MouseEventHandler<HTMLButtonElement>,
  open: boolean
}

export interface INavProps {
  open: boolean;
}