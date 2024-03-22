
'use client'
import { INavProps } from "@/interfaces/navigation";
import NextLink from "../utility/link";

const NavMenu = ({ open, setOpen }: INavProps) => {
  const handleLinkClick = () => {
    setOpen(false)
  };

  return (
    <div
      className={`
        relative w-full bg-inherit flex justify-end
        ${ open ? 'opacity-100' : 'opacity-0'}
        transition-all ease-in-out
      `}
    >
      <div className={`
        flex justify-start text-right
        w-auto
        ${open ? 'max-w-none' : 'max-w-0'} transition-all ease-in-out duration-100
        p-4 bg-inherit flex-col items-end bg-white bg-opacity-40 rounded shadow-sm
      `}>
        <ul>
          <li>
            <NextLink
              href="/"
              onClick={handleLinkClick}
              className={`
                md:hover:underline
                text-5xl
                transition-all delay-75 ease-in-out
                ${open ? 'visible' : 'invisible'}
              `}
            >
              Home
            </NextLink>
          </li>
          <li>
            <NextLink
              href="/coconuts"
              onClick={handleLinkClick}
              className={`
                md:hover:underline
                text-5xl
                transition-all delay-75 ease-in-out
                ${open ? 'visible' : 'invisible'}
              `}
            >
              Coconuts
            </NextLink>
          </li>
        </ul>
      </div>
    </div>
  )
};

export default NavMenu;
