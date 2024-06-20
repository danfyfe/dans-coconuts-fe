'use client'
import { TourContext } from "@/context/TourProvider";
import withTour from "@/hoc/display/withTour";
import { useContext } from "react";
import TourHighlight from "../tour/highlight";

const Tour = withTour((type) => {
  return (
    <TourHighlight type={type}/>
  )
});


const CoconutsTour = () => {
  const { activeTour } = useContext(TourContext);

  return (
    <>
      {
        activeTour === 'coconuts' ? (
          <>
            <Tour />
          </>
        ) : null
      }
    </>
  )
};

export default CoconutsTour;
