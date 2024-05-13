'use client'

import { CoconutContext } from "@/context/CoconutProvider";
import { useContext } from "react";
import CoconutTrashCan from "./coconut-trash-can";
import Coconut from "./coconut";

const CoconutContainer = () => {
  const { coconuts } = useContext(CoconutContext);

  return (
    <section
      id="coconut-container"
      className='
        absolute top-0 left-0
        h-[100dvh] w-[calc(100dvw)]
      '
    >
      <div className="relative h-full w-full">
        {/* <CoconutTrashCan /> */}
        {
          coconuts.map((coconut, index) => {
            return <Coconut key={`coconut-${index}`} index={index} coconut={coconut} />
          })
        }
      </div>
    </section>
  )
};

export default CoconutContainer;
