'use client'

import { CoconutContext } from "@/context/CoconutProvider";
import Image from "next/image";
import { useContext } from "react";
import { AnimatedTooltip } from "../tool-tip";

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
        <AnimatedTooltip items={coconuts} />
      </div>
    </section>
  )
};

export default CoconutContainer;
