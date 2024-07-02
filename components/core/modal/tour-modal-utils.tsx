'use client'
import { Dispatch, SetStateAction, useContext, useEffect } from "react";
import setCookie from "@/lib/setCookie";
import { FaPlus } from "react-icons/fa";
import withModal from "@/hoc/display/withModal";
import ContentContainer from "@/components/core/containers/content-container";
import Button from "@/components/core/utility/button";
import { IActiveTourElemId, IModalType, TourContext } from "@/context/TourProvider";
import EscapeToQuitDisclaimer from "./escape-to-quit";
import ActiveTourData from "@/data/tours";
import MainTourContent from "./main-tour-contents";
import StartingTourElems from "@/data/tours/starting-elems";
import { useGetCookie } from "@/lib/hooks/useGetCookie";

const TourModalUtils = ({ type, setOpen }:
  { 
    type: IModalType;
    // setOpen is supplied by withModal
    setOpen?: Dispatch<SetStateAction<boolean>>;
  }) => {
  const { setActiveTour, setActiveTourElemId, activeTourData, setActiveTourData } = useContext(TourContext);

  const handleSetCookie = () => {
    const cookieName = `${type}-modal-opt-out`;
    setCookie(cookieName, 1);
    if (setOpen) setOpen(false);
  };

  const handleSetTour = () => {
    setActiveTour(type);
    const startingElem = StartingTourElems[type] as IActiveTourElemId;
    setActiveTourElemId(startingElem);
    if (setOpen) setOpen(false);
  };

  useEffect(() => {
    const tourData = ActiveTourData[type];
    setActiveTourData(tourData);
  }, [setActiveTourData, type]);

  return (
    <ContentContainer className="lg:p-6 overflow-auto max-h-none">
      <Button
        asLink
        className="absolute text-2xl right-0 top-0 p-4 lg:p-6"
        onClick={() => setOpen ? setOpen(false) : {}}
        id={`${type}-close-modal`}
      >
        <FaPlus className="rotate-45"/>
      </Button>

      {
        activeTourData.type && activeTourData.main ? (
          <MainTourContent
            title={activeTourData.main.title}
            copyElems={activeTourData.main.copyElems}
          />
        ) : null
      }

      <div className="grid w-full lg:grid-cols-2 lg:gap-10 gap-4">
        <Button
          className=""
          id={`${type}-dont-show-me-this-again-btn`}
          onClick={handleSetCookie}
        >
          Don&apos;t Show Me This Again
        </Button>
        <Button
          className=""
          id={`${type}-start-tour-btn`}
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
