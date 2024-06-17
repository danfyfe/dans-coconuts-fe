'use client'
import { IActiveTour, TourContext } from "@/context/TourProvider";
import { useContext, useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
} from "@/components/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import P from "../core/typography/P";
import H2 from "../core/typography/H2";
import Button from "../core/utility/button";
import EscapeToQuitDisclaimer from "../core/modal/escape-to-quit";
import Loading from "../core/loaders/loading";

const TourHighlight = () => {
  const { activeTourElemId, setActiveTourElemId, activeTourData, setActiveTour } = useContext(TourContext);
  const [elemStyles, setElemStyles] = useState({});
  const [activeStep, setActiveStep] = useState<number>(0);
  const step = activeTourData.type ? activeTourData.steps[activeStep] : null;

  
  useEffect(() => {
    if (activeTourElemId) {
      const element = document.getElementById(activeTourElemId);
      if (element) {
        const rect = element.getBoundingClientRect();
        setElemStyles({
          width: rect.width + 20,
          height: rect.height + 20,
          top: Math.abs((rect.top + window.scrollY - rect.height / 2) + 10),
          left: (rect.left + window.scrollX - rect.width / 2) + 10,
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
        <Popover defaultOpen={true} modal={true}>
          <PopoverTrigger></PopoverTrigger>
          <PopoverContent
            className="z-[8000]"
            sideOffset={50} align="end"
            onPointerDownOutside={(e) => e.preventDefault()}
          >
            <div className="relative">
              {
                step ? (
                  <>
                    <H2 className="!text-left text-xl">
                      {step.title}
                    </H2>
                    {
                      step.copyElems.map((elem, index) => (
                        <P key={`tour-step-copy-${index}`} className="mt-2">{elem}</P>
                      ))
                    }
                    {
                      step.nextElemId ? (
                        <Button
                          asLink
                          className="block ml-auto underline mt-2"
                          onClick={() => {
                            setActiveTourElemId(step.nextElemId);
                            setActiveStep(activeStep + 1);
                          }}
                        >
                          Next
                        </Button>
                      ) : (
                        <Button
                          asLink
                          className="block ml-auto underline mt-2"
                          onClick={() => {
                            setActiveStep(0);
                            setActiveTourElemId(null);
                            setActiveTour(null);
                          }}
                        >
                          End Tour
                        </Button>
                      )
                    }
                    <EscapeToQuitDisclaimer />
                  </>
                ) : <Loading />
              }
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
};

export default TourHighlight;
