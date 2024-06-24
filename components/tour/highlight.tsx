'use client'
import { TourContext } from "@/context/TourProvider";
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
import { useGetCookie } from "@/lib/hooks/useGetCookie";

const TourHighlight = () => {
  const { activeTour, activeTourElemId, setActiveTourElemId, activeTourData, setActiveTour } = useContext(TourContext);
  const [elemStyles, setElemStyles] = useState({});
  const [activeStep, setActiveStep] = useState<number>(0);
  const cookie = useGetCookie(`${activeTour}-modal-opt-out`);

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
    <>
      {!cookie ? (
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
                          <div className="flex justify-end mt-2">
                            {
                              step.prevElemId ? (
                                <Button
                                  asLink
                                  className="block underline mr-auto"
                                  onClick={() => {
                                    setActiveTourElemId(step.prevElemId);
                                    setActiveStep(activeStep - 1);
                                  }}
                                >
                                  Back
                                </Button>
                              ) : null
                            }
                            {
                              step.nextElemId ? (
                                <Button
                                  asLink
                                  className="block underline"
                                  onClick={() => {
                                    setActiveTourElemId(step.nextElemId);
                                    setActiveStep(activeStep + 1);
                                  }}
                                >
                                  Continue
                                </Button>
                              ) : (
                                <Button
                                  asLink
                                  className="block underline"
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
                          </div>
                          <EscapeToQuitDisclaimer />
                        </>
                      ) : <Loading />
                    }
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
      ) : null
    }
  </>
  )
};

export default TourHighlight;
