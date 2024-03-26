'use client'

import { CoconutContext } from "@/context/CoconutProvider";
import Image from "next/image";
import { useContext } from "react";

const CoconutContainer = () => {
  const { coconuts } = useContext(CoconutContext);

  return (
    <section
      className='
        absolute top-0 left-0
        h-full w-full
      '
    >
      <div className="relative h-full w-full">
        {
          coconuts.map((coconut, index) => {
            return (
              <Image
                style={{
                  left: coconut.xPosition
                }}
                priority
                src="/images/coconut.png"
                alt="An image of a coconut - navigation trigger"
                height={200}
                width={200}
                className="absolute animate-fall ease-in-out h-20 w-20 drop-shadow-coconut"
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
