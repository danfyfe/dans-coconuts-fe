'use client'
import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface IMenusContext {
  linkNavOpen: boolean;
  handleToggleLinkNav: () => void;
  setLinkNavOpen: Dispatch<SetStateAction<boolean>>;
  weatherWidgetOpen: boolean;
  handleToggleWeatherWidget:  () => void
}

export const MenusContext = createContext<IMenusContext>({
  linkNavOpen: false,
  handleToggleLinkNav: () => {},
  setLinkNavOpen: () => {},
  weatherWidgetOpen: false,
  handleToggleWeatherWidget: () => {}
});

export const MenusProvider = ({ children }: { children: React.ReactNode }) => {
  const [linkNavOpen, setLinkNavOpen] = useState<boolean>(false);
  const [weatherWidgetOpen, setWeatherWidgetOpen] = useState<boolean>(false);

  const handleToggleLinkNav = () => {
    if (weatherWidgetOpen) setWeatherWidgetOpen(false);
    setLinkNavOpen(!linkNavOpen);
  };

  const handleToggleWeatherWidget = () => {
    if (linkNavOpen) setLinkNavOpen(false);
    setWeatherWidgetOpen(!weatherWidgetOpen);
  };

  return (
    <MenusContext.Provider
      value={{
        linkNavOpen,
        weatherWidgetOpen,
        handleToggleLinkNav,
        setLinkNavOpen,
        handleToggleWeatherWidget
      }}
    >
      {children}
    </MenusContext.Provider>
  )
};
