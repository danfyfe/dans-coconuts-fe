'use client'
import { useContext, useMemo } from "react";
import MenuWrapper from "../core/containers/menu-container";
import { MenusContext } from "@/context/MenusProvider";

const HelpMenu = () => {
  const { activeMenu, toggleMenu } = useContext(MenusContext);
  const helpMenuOpen = activeMenu === 'help-menu';

  return (
    <>
      <MenuWrapper id="help-menu" open={helpMenuOpen} setOpen={() => toggleMenu('help-menu')}>
        menu
      </MenuWrapper>
    </>
  )
};

export default HelpMenu;
