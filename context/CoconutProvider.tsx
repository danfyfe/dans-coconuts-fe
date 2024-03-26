'use client'
import { getRandomNumberInRange } from "@/lib/randoms";
import { createContext, useState } from "react";

interface ICoconutProvider {
  coconuts: ICoconut[];
  addCoconut: () => void
}

interface ICoconut {
  xPosition: number;
  animationDuration: string;
}

export const CoconutContext = createContext<ICoconutProvider>({
  coconuts: [],
  addCoconut: () => {}
});

export const CoconutProvider = ({ children }: { children: React.ReactNode }) => {
  const [coconuts, setCoconuts] = useState<ICoconut[]>([]);

  const addCoconut = () => {
    const windowWidth = global.window.innerWidth;
    const randomPosition = getRandomNumberInRange(-40, windowWidth);
    const randomTiming = `${(Math.random() + 1)}s`;
    const coconut = {
      xPosition: randomPosition,
      animationDuration: randomTiming
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
