'use client'
import { useContext } from "react";
import { FaQuestion } from "react-icons/fa";
import Button from "../core/utility/button";
import { MenusContext } from "@/context/MenusProvider";

const HelpTrigger = ({ className }: { className?: string }) => {
  const { toggleMenu } = useContext(MenusContext);

  return (
    <Button asLink onClick={() => toggleMenu('help-menu')} className={`bg-sand_day px-0 ${className ? className : ''}`} ariaLabel="open help menu" >
      <FaQuestion />
    </Button>
  )
};

export default HelpTrigger;
