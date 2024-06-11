'use client'
import ContentContainer from "../core/containers/content-container";
import withModal from "@/hoc/display/withModal";
import P from "../core/typography/P";
import Button from "../core/utility/button";
import { FaPlus } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import H2 from "../core/typography/H2";
import setCookie from "@/lib/setCookie";

const HomePageModal = ({ setOpen } : { setOpen?: Dispatch<SetStateAction<boolean>> }) => {
  const handleSetCookie = () => {
    setCookie('homepage-modal-opt-out', 1);
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
          <H2>Welcome to Dan&apos;s Coconuts!</H2>
          <P>Descriptive text</P>
          <P>Descriptive text</P>
          <P>Descriptive text</P>
          <P>Descriptive text</P>
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
        </div>
    </ContentContainer>
  )
};

export default withModal(HomePageModal);
