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
  yPosition: number;
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

export const CoconutsProvider = ({ children }: { children: React.ReactNode }) => {
  const [coconuts, setCoconuts] = useState<ICoconut[]>([]);
  const coconutCountCookie = useGetCookie('dc-coconut-count');

  const createNewCoconut = useCallback(({ title, content, users }) => {
    const windowWidth = global.window.innerWidth;
    const windowHeight = global.window.innerHeight;
    const randomPosition = getRandomNumberInRange(-40, windowWidth);
    const randomTiming = `${(Math.random() + 1)}s`;
    const count = coconuts.length;
    const message = `${count < 5 ? ((count > 0) ? 'another coconut!' : 'a coconut!') : 'they just keep coming!'}`;
    const designation = `Oh man, ${message}`;
    const coconut: ICoconut = {
      xPosition: randomPosition,
      yPosition: windowHeight,
      animationDuration: randomTiming,
      id: randomPosition,
      name: 'Coconut',
      designation,
      image: '/images/coconut.png',
      alt: 'Image of a coconut'
    };
    return coconut;
  }, [coconuts]);

  const addCoconut = useCallback(({ title, content, users }) => {
    const newCoconut = createNewCoconut({ title, content, users });
    const newCoconuts = [...coconuts, newCoconut];
    setCoconuts(newCoconuts);
    setCookie('dc-coconut-count', newCoconuts.length);
  }, [coconuts, createNewCoconut]);

  // useEffect(() => {
  //   // re-create amount of coconuts from cookie on load
  //   if (coconutCountCookie && coconuts.length === 0) {
  //     let count = +coconutCountCookie;
  //     let newCoconuts: ICoconut[] = [];
  //     while (count > 0) {
  //       const newCoconut = createNewCoconut();
  //       newCoconuts = [...newCoconuts, newCoconut];
  //       count --;
  //     }
  //     setCoconuts(newCoconuts);
  //   }
  // }, [coconutCountCookie, createNewCoconut, coconuts]);

  return (
    <CoconutContext.Provider value={{ coconuts, addCoconut }}>
      {children}
    </CoconutContext.Provider>
  )
};
