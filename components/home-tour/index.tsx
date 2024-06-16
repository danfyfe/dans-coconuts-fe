'use client'
import { TourContext } from "@/context/TourProvider";
import withTour from "@/hoc/display/withTour";
import { useContext } from "react";
import Highlight from "../tour/highlight";

const Tour = () => {
  return (
    <Highlight />
  )
};

const TourTour = withTour(Tour);

const HomeTour = () => {
  const { activeTour } = useContext(TourContext);

  return (
    <>
      {
        activeTour === 'home' ? (
          <>
            <TourTour />
          </>
        ) : null
      }
    </>
  )
};

export default HomeTour;
