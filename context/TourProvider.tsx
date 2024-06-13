'use client'
import { createContext, Dispatch, SetStateAction, useState } from "react";

export type IActiveTour = 'home' | null;

export type IModalType = 'home';

interface ITourProvider {
  activeTour: IActiveTour
  setActiveTour: Dispatch<SetStateAction<IActiveTour>>;
}

export const TourContext = createContext<ITourProvider>({
  activeTour: null,
  setActiveTour: () => {},
});

export const TourProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTour, setActiveTour] = useState<IActiveTour>(null);

  return (
    <TourContext.Provider
      value={{
        activeTour, setActiveTour
      }}>
      {children}
    </TourContext.Provider>
  )
};
