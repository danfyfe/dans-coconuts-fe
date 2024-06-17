'use client'
import { IActiveTour, TourContext } from "@/context/TourProvider";
import withTour from "@/hoc/display/withTour";
import { useContext } from "react";
import TourHighlight from "../tour/highlight";

const Tour = withTour(({ type }: { type: IActiveTour }) => {
  return (
    <TourHighlight type={type} />
  )
});


const HomeTour = () => {
  const { activeTour } = useContext(TourContext);

  return (
    <>
      {
        activeTour === 'home' ? (
          <>
            <Tour type="home" />
          </>
        ) : null
      }
    </>
  )
};

export default HomeTour;
