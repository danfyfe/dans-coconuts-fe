'use client'
import { createContext, useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface IModalContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const ModalContext = createContext<IModalContext>({
  open: false,
  setOpen: () => {},
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // const displayWeatherCookie = getCookieNumberValue({ cookieName: 'dc-display-weather' }) || 0;
    // setOpen(displayWeatherCookie)
  }, [setOpen]);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>
      {children}
    </ModalContext.Provider>
  )
};
