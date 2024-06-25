'use client'
import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { IActiveTour } from "./TourProvider";

interface IModalContext {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>
  toggleOpen: () => void;
  setActiveModal: Dispatch<SetStateAction<IActiveTour>>;
}

export const ModalContext = createContext<IModalContext>({
  open: false,
  setOpen: () => {},
  toggleOpen: () => {},
  setActiveModal: () => {}
});

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(true);
  const [activeModal, setActiveModal] = useState<IActiveTour>(null);

  const toggleOpen = () => setOpen(!open);

  // useEffect(() => {
  //   // const displayWeatherCookie = getCookieNumberValue({ cookieName: 'dc-display-weather' }) || 0;
  //   // setOpen(displayWeatherCookie)
  // }, [setOpen]);

  return (
    <ModalContext.Provider value={{ open, toggleOpen, setOpen, setActiveModal }}>
      {children}
    </ModalContext.Provider>
  )
};
