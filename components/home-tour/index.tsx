'use client'
import { TourContext } from "@/context/TourProvider";
import withTour from "@/hoc/display/withTour";
import { useContext } from "react";
import TourHighlight from "../tour/highlight";

const Tour = withTour(() => {
  return (
    <TourHighlight />
  )
});


const HomeTour = () => {
  const { activeTour } = useContext(TourContext);

  return (
    <>
      {
        activeTour === 'home' ? (
          <>
            <Tour />
          </>
        ) : null
      }
    </>
  )
};

export default HomeTour;
