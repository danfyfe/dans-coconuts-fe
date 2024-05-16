'use client'
import { createContext, useCallback, useState } from "react";
import { Dispatch, SetStateAction } from "react";

export type ActiveMenu = 'link-nav' | 'weather-widget' | 'help-menu' | null;

interface IMenusContext {
  activeMenu: ActiveMenu;
  setActiveMenu: Dispatch<SetStateAction<ActiveMenu>>;
  toggleMenu: (menu: ActiveMenu) => void
}


export const MenusContext = createContext<IMenusContext>({
  activeMenu: null,
  setActiveMenu: () => {},
  toggleMenu: () => {}
});

export const MenusProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);

  const toggleMenu = useCallback((menu: ActiveMenu) => {
    if (activeMenu === menu) {
      setActiveMenu(null)
    } else {
      setActiveMenu(menu)
    }
  }, [activeMenu]);


  return (
    <MenusContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        toggleMenu
      }}
    >
      {children}
    </MenusContext.Provider>
  )
};
