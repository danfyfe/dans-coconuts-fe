'use client'
import { useContext } from "react";
import { HelpContext } from "@/context/HelpProvider";
import HelpMenuHeading from "./help-menu-heading";
import Loading from "../core/loaders/loading";

const HelpMenuDisplay = () => {
  const { state } = useContext(HelpContext);
  const { activeHelpContent } = state;
  const heading = activeHelpContent?.['topic-title'] ?? '';
  return (
    <>
    {
      activeHelpContent ? (
        <HelpMenuHeading heading={heading} />

      ) : (
        <Loading className="bg-transparent" />
      )
    }
    </>
  )
};

export default HelpMenuDisplay;
