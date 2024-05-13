'use client'

import { CoconutContext } from "@/context/CoconutProvider";
import { useContext } from "react";
import CoconutTrashCan from "./coconut-trash-can";
import Coconut from "./coconut";

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
        {/* <CoconutTrashCan /> */}
        {
          coconuts.map((coconut, index) => {
            return <Coconut key={`coconut-${index}`} coconut={coconut} />
          })
        }
      </div>
    </section>
  )
};

export default CoconutContainer;
