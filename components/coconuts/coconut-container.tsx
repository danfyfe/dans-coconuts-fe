'use client'

import { CoconutContext } from "@/context/CoconutProvider";
import Image from "next/image";
import { useContext, useEffect, useState, useRef } from "react";

const CoconutContainer = () => {
  const { coconuts } = useContext(CoconutContext);
  const [nextX, setNextX] = useState([0]);

  useEffect(() => {
    const windowWidth = global.window.innerWidth;
    const randomPosition = Math.floor(Math.random() * windowWidth);
    const newPositions = [...nextX, randomPosition];
    setNextX(newPositions);
  }, [coconuts, setNextX, nextX]);

  return (
    <section
      className='
        absolute top-0 left-0
        h-full w-full
      '
    >
      <div className="relative h-full w-full">
        {
          coconuts.map((_, index) => {
            return (
              <Image
                style={{
                  left: nextX[index]
                }}
                priority
                src="/images/coconut.png"
                alt="An image of a coconut - navigation trigger"
                height={200}
                width={200}
                className="absolute animate-fall ease-in-out h-20 w-20"
                key={`coconut-${index}`}
              />
            )
          })
        }
      </div>
    </section>
  )
};

export default CoconutContainer;
