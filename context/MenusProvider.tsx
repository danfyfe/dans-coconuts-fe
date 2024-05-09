'use client'
import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface IMenusContext {
  linkNavOpen: boolean;
  setLinkNavOpen: Dispatch<SetStateAction<boolean>>
  weatherWidgetOpen: boolean;
  setWeatherWidgetOpen: Dispatch<SetStateAction<boolean>>
}

export const MenusContext = createContext<IMenusContext>({
  linkNavOpen: false,
  setLinkNavOpen: () => {},
  weatherWidgetOpen: false,
  setWeatherWidgetOpen: () => {}
});

export const MenusProvider = ({ children }: { children: React.ReactNode }) => {
  const [linkNavOpen, setLinkNavOpen] = useState<boolean>(false);
  const [weatherWidgetOpen, setWeatherWidgetOpen] = useState<boolean>(false);

  return (
    <MenusContext.Provider
      value={{
        linkNavOpen,
        weatherWidgetOpen,
        setLinkNavOpen,
        setWeatherWidgetOpen
      }}
    >
      {children}
    </MenusContext.Provider>
  )
};
