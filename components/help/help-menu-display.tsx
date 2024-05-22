'use client'
import { useContext } from "react";
import { HelpContext } from "@/context/HelpProvider";
import HelpMenuHeading from "./help-menu-heading";
import Loading from "../core/loaders/loading";
import HelpMenuAccordion from "./help-menu-accordion";
import P from "../core/typography/P";

const HelpMenuDisplay = () => {
  const { state } = useContext(HelpContext);
  const { activeHelpContent } = state;
  const heading = activeHelpContent?.['topic-title'] ?? '';
  const titles = activeHelpContent?.['topic-titles'] ?? [];
  const content = activeHelpContent?.['topic-content'] ?? {}

  return (
    <>
    {
      activeHelpContent ? (
        <>
          <HelpMenuHeading heading={heading} />
          <P className="text-xs text-left">*All data stored in Context only until MongoDB x PROD issue is sorted out</P>
          <HelpMenuAccordion titles={titles} content={content} />
        </>
      ) : (
        <Loading className="bg-transparent" />
      )
    }
    </>
  )
};

export default HelpMenuDisplay;
