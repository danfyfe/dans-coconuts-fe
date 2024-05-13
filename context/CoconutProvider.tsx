'use client'
import { useGetCookie } from "@/lib/hooks/useGetCookie";
import { getRandomNumberInRange } from "@/lib/randoms";
import setCookie from "@/lib/setCookie";
import { createContext, useState, useId, useEffect, useCallback } from "react";

interface ICoconutProvider {
  coconuts: ICoconut[];
  addCoconut: () => void
}

export interface ICoconut {
  xPosition: number;
  animationDuration: string;
  id: number;
  name: string;
  designation?: string;
  image: string;
  alt: string;
}

export const CoconutContext = createContext<ICoconutProvider>({
  coconuts: [],
  addCoconut: () => {}
});

export const CoconutProvider = ({ children }: { children: React.ReactNode }) => {
  const [coconuts, setCoconuts] = useState<ICoconut[]>([]);
  const coconutCountCookie = useGetCookie('dc-coconut-count');

  const addCoconut = useCallback(() => {
    const windowWidth = global.window.innerWidth;
    const randomPosition = getRandomNumberInRange(-40, windowWidth);
    const randomTiming = `${(Math.random() + 1)}s`;
    const count = coconuts.length;
    const message = `${count < 5 ? ((count > 0) ? 'another coconut!' : 'a coconut!') : 'they just keep coming!'}`;
    const designation = `Oh man, ${message}`;
    const coconut: ICoconut = {
      xPosition: randomPosition,
      animationDuration: randomTiming,
      id: randomPosition,
      name: 'Coconut',
      designation,
      image: '/images/coconut.png',
      alt: 'Image of a coconut'
    };
    const newCoconuts = [...coconuts, coconut];
    setCoconuts(newCoconuts);
    setCookie('dc-coconut-count', newCoconuts.length);
  }, [coconuts]);

  // useEffect(() => {
  //   console.log('count', coconutCountCookie);
  //   if (coconutCountCookie && coconuts.length === 0) {
  //     const recreatedSavedCoconuts = (() => {
  //       let count = +coconutCountCookie;
  //       while (count > 0) {
  //         addCoconut();
  //         count --;
  //       }
  //     });
  //     recreatedSavedCoconuts();
  //   }
  // }, [coconutCountCookie, addCoconut, coconuts]);

  return (
    <CoconutContext.Provider value={{ coconuts, addCoconut }}>
      {children}
    </CoconutContext.Provider>
  )
};
