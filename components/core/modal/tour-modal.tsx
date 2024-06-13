'use client'
import { IActiveTour, TourContext } from "@/context/TourProvider";
import { Dispatch, ReactNode, SetStateAction, useContext, useEffect } from "react";
import ReactDOM from "react-dom";

interface ITourProps {
  activeTour: IActiveTour;
  setActiveTour: Dispatch<SetStateAction<IActiveTour>>
  children: ReactNode;
}

const Tour = ({ activeTour, setActiveTour, children }: ITourProps) => {
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveTour(null);
      }
    };

    if (activeTour) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeTour, setActiveTour]);
  
  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="
      w-full h-full fixed top-0 left-0 flex
      justify-center items-center
      z-[8000]
    ">
      {children}
    </div>,
    document.getElementById('tour-root') as HTMLElement
  )
};

export default Tour;
