'use client'
import { useCallback, useState } from "react";
import Hamburger from "./hamburger";


const NavMenu = () => {
  return (
    <div className="relative w-full">
      <div className="absolute w-full">
        menu content
      </div>
    </div>
  )
};

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <nav className={`
      absolute w-full flex flex-col justify-end items-end z-50

    `}>
      <Hamburger onClick={handleOpen} />
      {
        open ? (
          <NavMenu />
        ) : null
      }
    </nav>
  )
};

export default Navigation;
