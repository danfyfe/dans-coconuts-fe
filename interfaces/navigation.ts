import { Dispatch, MouseEventHandler } from "react"

export interface INavTriggerProps {
  onClick: MouseEventHandler<HTMLButtonElement>,
  open: boolean
}

export interface INavWrapperProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>
}

export interface IMenuProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>
}
