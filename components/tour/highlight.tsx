'use client'
import { TourContext } from "@/context/TourProvider";
import { useContext } from "react";
import {
  Popover,
  PopoverContent,
} from "@/components/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";

const Highlight = () => {
  const { highlight } = useContext(TourContext);

  const styles = {
    ...(highlight?.diameter && { width: highlight.diameter }),
    ...(highlight?.diameter && { height: highlight.diameter }),
    ...(highlight?.y && { top: `calc(${highlight.y}% - ${highlight.diameter / 2}px)` }),
    ...(highlight?.x && { left: `calc(${highlight.x}% - ${highlight.diameter / 2}px)` }),
    borderRadius: '50%',
    boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.25)',
    mixBlendMode: 'destination-out' as React.CSSProperties['mixBlendMode'],
  };

  return (
    <div className="fixed w-full h-full z-50 pointer-events-none">
      <div
        className="absolute border-2 border-white rounded-full bg-transparent"
        style={styles}
      >
        <Popover defaultOpen={true}>
          <PopoverTrigger></PopoverTrigger>
          <PopoverContent className="z-[8000]">
            <div className="relative">
            CONTENT

            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
};

export default Highlight;
