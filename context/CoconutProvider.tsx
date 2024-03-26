'use client'
import { createContext, useState } from "react";

interface ICoconutProvider {
  coconuts: ICoconut[];
  addCoconut: () => void
}

interface ICoconut {
  xPosition: number;
}

export const CoconutContext = createContext<ICoconutProvider>({
  coconuts: [],
  addCoconut: () => {}
});

export const CoconutProvider = ({ children }: { children: React.ReactNode }) => {
  const [coconuts, setCoconuts] = useState<ICoconut[]>([]);

  const addCoconut = () => {
    const windowWidth = global.window.innerWidth;
    const randomPosition = Math.floor(Math.random() * windowWidth);
    const coconut = {
      xPosition: randomPosition
    };
    const newCoconuts = [...coconuts, coconut];
    setCoconuts(newCoconuts)
  };

  return (
    <CoconutContext.Provider value={{ coconuts, addCoconut }}>
      {children}
    </CoconutContext.Provider>
  )
};
