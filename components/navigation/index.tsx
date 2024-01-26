'use client'
import { useCallback, useState } from "react";
import Hamburger from "./hamburger";

interface NavProps {
  open: boolean;
}

const NavMenu = ({ open }: NavProps) => {
  return (
    <div className={`relative w-full bg-inherit`}>
      {
        open ? (
        <div className="
          absolute w-full flex justify-end
          px-5 py-2 bg-inherit flex-col items-end
        ">
          {
            [1,2,3,4,5].map((l) => <a key={l} href="/">link</a>)
          }
        </div>
        ) : null
      }
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
      absolute w-full flex flex-col justify-start items-end z-50
      transition-all h-auto
      ${open ? 'bg-sand_day min-h-screen lg:min-h-[50vh]' : 'bg-none min-h-0'}
    `}>
      <Hamburger onClick={handleOpen} open={open} />
      <NavMenu open={open} />
    </nav>
  )
};

export default Navigation;
