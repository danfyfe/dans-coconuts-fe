import { Dispatch, MouseEventHandler } from "react"

export interface INavTriggerProps {
  onClick: MouseEventHandler<HTMLButtonElement>,
  open: boolean
}

export interface INavProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>
}