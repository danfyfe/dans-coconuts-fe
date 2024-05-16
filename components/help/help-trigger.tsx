'use client'
import { FaQuestion } from "react-icons/fa";
import Button from "../core/utility/button";

const HelpTrigger = ({ className }: { className?: string }) => {
  return (
    <Button asLink className={`bg-sand_day px-0 ${className ? className : ''}`} ariaLabel="open help menu" >
      <FaQuestion />
    </Button>
  )
};

export default HelpTrigger;
