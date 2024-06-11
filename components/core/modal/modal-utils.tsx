'use client'
import { Dispatch, ReactNode, SetStateAction } from "react";
import setCookie from "@/lib/setCookie";
import { FaPlus } from "react-icons/fa";
import withModal from "@/hoc/display/withModal";
import ContentContainer from "@/components/core/containers/content-container";
import Button from "@/components/core/utility/button";

const ModalUtils = ({ type, setOpen, children }:
  { 
    type: string;
    // setOpen is supplied by withModal
    setOpen?: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
  }) => {

  const handleSetCookie = () => {
    const cookieName = `${type}-modal-opt-out`;
    setCookie(cookieName, 1);
    if (setOpen) setOpen(false);
  };

  return (
    <ContentContainer>
      <Button
        asLink
        className="absolute text-2xl right-0 top-0 p-4"
        onClick={() => setOpen ? setOpen(false) : {}}
      >
        <FaPlus className="rotate-45"/>
      </Button>

      <div>
        {children}
      </div>
    
      <div className="mt-2 grid w-full lg:grid-cols-2 lg:gap-10 gap-4">
        <Button
        className=""
          onClick={handleSetCookie}
        >
          Don&apos;t Show Me This Again
        </Button>
        <Button
          className=""
        >
          Start Tour
        </Button>
      </div>
    </ContentContainer>
  )
};

export default withModal(ModalUtils);
