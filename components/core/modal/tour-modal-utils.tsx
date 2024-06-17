'use client'
import { Dispatch, ReactNode, SetStateAction, useContext } from "react";
import setCookie from "@/lib/setCookie";
import { FaPlus } from "react-icons/fa";
import withModal from "@/hoc/display/withModal";
import ContentContainer from "@/components/core/containers/content-container";
import Button from "@/components/core/utility/button";
import { IModalType, TourContext } from "@/context/TourProvider";
import P from "../typography/P";
import EscapeToQuitDisclaimer from "./escape-to-quit";

const TourModalUtils = ({ type, setOpen, children }:
  { 
    type: IModalType;
    // setOpen is supplied by withModal
    setOpen?: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
  }) => {

  const { setActiveTour, setActiveTourElemId } = useContext(TourContext);

  const handleSetCookie = () => {
    const cookieName = `${type}-modal-opt-out`;
    setCookie(cookieName, 1);
    if (setOpen) setOpen(false);
  };

  const handleSetTour = () => {
    setActiveTour(type);
    setActiveTourElemId('nav-trigger');
    if (setOpen) setOpen(false);
  };

  return (
    <ContentContainer className="lg:p-6">
      <Button
        asLink
        className="absolute text-2xl right-0 top-0 p-4 lg:p-6"
        onClick={() => setOpen ? setOpen(false) : {}}
      >
        <FaPlus className="rotate-45"/>
      </Button>

      <div className="my-4">
        {children}
      </div>
    
      <div className="grid w-full lg:grid-cols-2 lg:gap-10 gap-4">
        <Button
        className=""
          onClick={handleSetCookie}
        >
          Don&apos;t Show Me This Again
        </Button>
        <Button
          className=""
          onClick={handleSetTour}
        >
          Start Tour
        </Button>
      </div>
      <EscapeToQuitDisclaimer />
    </ContentContainer>
  )
};

export default withModal(TourModalUtils);
