'use client'

import { TourContext } from "@/context/TourProvider";
import withTour from "@/hoc/display/withTour";
import { useContext } from "react";


const Tour = () => {
  return (
    <div>
      TOUR
    </div>
  )
};

const TourTour = withTour(Tour);

const HomeTour = () => {
  const { activeTour } = useContext(TourContext);
  console.log(activeTour === 'home')
  return (
    <>
      {
        activeTour === 'home' ? (
          <TourTour />
        ) : null
      }
    </>
  )
};


export default HomeTour;
