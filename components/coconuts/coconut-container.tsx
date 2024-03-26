'use client'

import { CoconutContext } from "@/context/CoconutProvider";
import { useContext, useEffect } from "react";

const CoconutContainer = () => {
  const { coconuts } = useContext(CoconutContext);
  useEffect(() => {
    console.log(coconuts)

  }, [coconuts]);

  return (
    <section
      className='
        absolute top-0 left-0
        h-full w-full
      '
    >

    </section>
  )
};

export default CoconutContainer;
