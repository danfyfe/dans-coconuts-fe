'use client'
import { createContext, useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface IModalContext {
  open: boolean;
  // setOpen: Dispatch<SetStateAction<boolean>>
  toggleOpen: () => void;
}

export const ModalContext = createContext<IModalContext>({
  open: false,
  toggleOpen: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  // useEffect(() => {
  //   // const displayWeatherCookie = getCookieNumberValue({ cookieName: 'dc-display-weather' }) || 0;
  //   // setOpen(displayWeatherCookie)
  // }, [setOpen]);

  return (
    <ModalContext.Provider value={{ open, toggleOpen }}>
      {children}
    </ModalContext.Provider>
  )
};
