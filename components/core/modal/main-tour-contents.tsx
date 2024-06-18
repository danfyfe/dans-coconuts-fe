import { ReactNode } from "react";
import H2 from "../typography/H2";
import P from "../typography/P";
import { ICopyElem } from "@/context/TourProvider";
import HR from "../utility/HR";

const MainTourContent = ({ title, copyElems }: { title: string; copyElems: ICopyElem[] }) => {
  return (
    <div className="mb-4">
      <H2 className="mb-2">{title}</H2>
      {
        copyElems.map((copy, index) => (
          <P key={`tour-elem-copy-${index}`}>{copy}</P>
        ))
      }
      <div>
        <HR key="home-page-tour-hr" className="mt-2" />
        <P className="text-sm"><sup>*</sup> Most pages have help functionality that can be accessed by clicking the &apos;?&apos; symbol next to headings.</P>
      </div>
    </div>
  )
};

export default MainTourContent;
