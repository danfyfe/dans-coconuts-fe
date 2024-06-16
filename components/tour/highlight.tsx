'use client'
import { TourContext } from "@/context/TourProvider";
import { useContext, useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
} from "@/components/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";

const Highlight = () => {
  const { highlight, activeTourElemId } = useContext(TourContext);
  const [elemStyles, setElemStyles] = useState({});
  console.log(activeTourElemId)
  useEffect(() => {
    if (activeTourElemId) {
      const element = document.getElementById(activeTourElemId);
      console.log('element', element)
      if (element) {
        const rect = element.getBoundingClientRect();

        setElemStyles({
          width: rect.width,
          height: rect.height,
          top: rect.top + window.scrollY - rect.height / 2,
          left: rect.left + window.scrollX - rect.width / 2,
          borderRadius: '50%',
          boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.25)',
          mixBlendMode: 'destination-out' as React.CSSProperties['mixBlendMode'],
        });
      }
    };
  }, [activeTourElemId]);

  return (
    <div className="fixed w-full h-full z-50 pointer-events-none">
      <div
        className="absolute border-2 border-white rounded-full bg-transparent"
        style={elemStyles}
      >
        {/* <Popover defaultOpen={true}>
          <PopoverTrigger></PopoverTrigger>
          <PopoverContent className="z-[8000]" alignOffset={50}>
            <div className="relative">
              Tour content to come!
              <div>

              </div>
            </div>
          </PopoverContent>
        </Popover> */}
      </div>
    </div>
  )
};

export default Highlight;
