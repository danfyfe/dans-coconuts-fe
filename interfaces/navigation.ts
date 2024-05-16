import { ActiveMenu } from "@/context/MenusProvider";
import { Dispatch, MouseEventHandler, ReactNode } from "react"

export interface INavTriggerProps {
  onClick: MouseEventHandler<HTMLButtonElement>,
  open: boolean
}

export interface IMenuWrapperProps {
  open: boolean;
  children: ReactNode;
  id: string;
  setOpen: Dispatch<React.SetStateAction<ActiveMenu>>;
  className?: string;
}

export interface ILinkNavMenuProps {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>
}
