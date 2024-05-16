import { ActiveMenu } from "@/context/MenusProvider";
import { Dispatch, MouseEventHandler, ReactNode } from "react"

export interface INavTriggerProps {
  onClick: MouseEventHandler<HTMLButtonElement>,
  open: boolean
}

export interface IMenuWrapperProps {
  children: ReactNode;
  id: ActiveMenu;
  className?: string;
}
