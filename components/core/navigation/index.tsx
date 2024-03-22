'use client'
import { useCallback, useState } from "react";
import NavTrigger from "./nav-trigger";
import NavMenu from "./nav-menu";

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <nav className={`
      absolute w-full md:w-1/4 md:right-0 flex flex-col justify-start items-end z-[1000]
      transition-all h-auto
      ${open ? 'bg-sand_day min-h-screen w-full' : 'bg-none min-h-0'}
      transition-all
    `}>
      <NavTrigger onClick={handleOpen} open={open} />
      <NavMenu open={open} />
    </nav>
  )
};

export default Navigation;
