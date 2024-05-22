'use client'

import { useParams } from "next/navigation";

const BreadCrumbs = () => {
  // const { title, } = useParams();
  // console.log(params);
  return (
    <div className="relative">
      <div className="absolute flex-col items-end bg-white rounded shadow-sm p-2 -top-[4.25rem] md:-top-[3.5rem]">
        Bread
      </div>
    </div>
  )
};

export default BreadCrumbs;
