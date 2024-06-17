import { ReactNode } from "react";
import H2 from "../typography/H2";
import P from "../typography/P";
import { ICopyElem } from "@/context/TourProvider";

const MainTourContent = ({ title, copyElems }: { title: string; copyElems: ICopyElem[] }) => {
  return (
    <div className="my-4">
      <H2 className="mb-2">{title}</H2>
      {
        copyElems.map((copy, index) => (
          <P key={`tour-elem-copy-${index}`}>{copy}</P>
        ))
      }
    </div>
  )
};

export default MainTourContent;
