
'use client'
import { INavProps } from "@/interfaces/navigation";
import NextLink from "../utility/link";
import MenuWrapper from "../containers/menu-container";
import { useContext } from "react";
import { MenusContext } from "@/context/MenusProvider";

const NavMenu = ({ open, setOpen }: INavProps) => {
  const { linkNavOpen, setLinkNavOpen } = useContext(MenusContext);
  const handleLinkClick = () => {
    setLinkNavOpen(false)
  };

  return (
    <MenuWrapper open={linkNavOpen}>
      <ul id="nav-link-menu-ul">
        <li>
          <NextLink
            href="/"
            prefetch
            onClick={handleLinkClick}
            className={`
              md:hover:underline
              text-5xl
              transition-all delay-75 ease-in-out
              ${linkNavOpen ? 'visible' : 'invisible'}
            `}
          >
            Home
          </NextLink>
        </li>
        <li>
          <NextLink
            href="/coconuts"
            prefetch
            onClick={handleLinkClick}
            className={`
              md:hover:underline
              text-5xl
              transition-all delay-75 ease-in-out
              ${linkNavOpen ? 'visible' : 'invisible'}
            `}
          >
            Coconuts
          </NextLink>
        </li>
        <li>
          <NextLink
            href="/github"
            prefetch
            onClick={handleLinkClick}
            className={`
              md:hover:underline
              text-5xl
              transition-all delay-75 ease-in-out
              ${linkNavOpen ? 'visible' : 'invisible'}
            `}
          >
            GitHub
          </NextLink>
        </li>
      </ul>
    </MenuWrapper>
  )
};

export default NavMenu;
