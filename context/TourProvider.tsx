'use client'
import { createContext, useState } from "react";


export type IActiveTour = 'home' | null;

interface ICoconutProvider {
  activeTour: IActiveTour
  setActiveTour: (tour: IActiveTour) => void;
}

export const CoconutContext = createContext<ICoconutProvider>({
  activeTour: null,
  setActiveTour: () => {},
});

export const CoconutsProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTour, setActiveTour] = useState<IActiveTour>(null);

  return (
    <CoconutContext.Provider
      value={{
        activeTour, setActiveTour
      }}>
      {children}
    </CoconutContext.Provider>
  )
};
