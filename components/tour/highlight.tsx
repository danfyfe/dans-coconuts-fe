'use client'
import { TourContext } from "@/context/TourProvider";
import { useContext } from "react";

const Highlight = () => {
  const { highlight } = useContext(TourContext);

  const styles = {
    ...(highlight?.diameter && { width: highlight.diameter }),
    ...(highlight?.diameter && { height: highlight.diameter }),
    ...(highlight?.y && highlight?.diameter && { top: highlight.y - highlight.diameter / 2 }),
    ...(highlight?.x && highlight?.diameter && { top: highlight.x - highlight.diameter / 2 }),
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 pointer-events-none">
      <div
        className="absolute border-2 border-white rounded-full"
        style={styles}
      >hello!</div>
    </div>
  )
};

export default Highlight;
