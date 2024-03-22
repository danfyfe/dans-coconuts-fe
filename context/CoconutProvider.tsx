'use client'
import { createContext, useState } from "react";

interface ICoconutProvider {
  coconuts: string[];
  addCoconut: () => void
}

export const CoconutContext = createContext<ICoconutProvider>({
  coconuts: [],
  addCoconut: () => {}
});

export const CoconutProvider = ({ children }: { children: React.ReactNode }) => {
  const [coconuts, setCoconuts] = useState<string[]>([]);

  const addCoconut = () => {
    const coconut = 'coconut';
    const newCoconuts = [...coconuts, coconut];
    setCoconuts(newCoconuts)
  };

  return (
    <CoconutContext.Provider value={{ coconuts, addCoconut }}>
      {children}
    </CoconutContext.Provider>
  )
};
