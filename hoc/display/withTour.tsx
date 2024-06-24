'use client'
export const dynamic = 'force-dynamic';
import Tour from "@/components/core/modal/tour-modal";
import { TourContext } from "@/context/TourProvider";
import { ComponentType, useContext } from "react";

const withTour = <P extends object>(Component: ComponentType<P>) => {
  const ComponentWithTour = (props: P) => {
    const { activeTour, setActiveTour } = useContext(TourContext);

    return (
      <>
        <Tour activeTour={activeTour} setActiveTour={setActiveTour}>
          <Component {...props} setActiveTour={setActiveTour} />
        </Tour>
      </>
    )
  }
  return ComponentWithTour;
};

export default withTour;
