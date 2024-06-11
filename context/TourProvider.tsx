'use client'
import { createContext, useState } from "react";


export type IActiveTour = 'home' | null;

export type IModalType = 'home';

interface ITourProvider {
  activeTour: IActiveTour
  setActiveTour: (tour: IActiveTour) => void;
}

export const TourContext = createContext<ITourProvider>({
  activeTour: null,
  setActiveTour: () => {},
});

export const CoconutsProvider = ({ children }: { children: React.ReactNode }) => {
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
