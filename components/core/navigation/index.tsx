'use client'
import { useCallback, useState } from "react";
import Hamburger from "./hamburger";
import NavMenu from "./nav-menu";

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <nav className={`
      absolute w-full flex flex-col justify-start items-end z-50
      transition-all h-auto
      ${open ? 'bg-sand_day min-h-screen lg:min-h-[auto] w-full' : 'bg-none min-h-0'}
    `}>
      <Hamburger onClick={handleOpen} open={open} />
      <NavMenu open={open} />
    </nav>
  )
};

export default Navigation;
