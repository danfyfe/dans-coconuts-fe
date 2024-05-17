'use client'
import { useContext } from "react";
import { FaQuestion } from "react-icons/fa";
import Button from "../core/utility/button";
import { MenusContext } from "@/context/MenusProvider";
import { ActiveHelpCategory, HelpContext } from "@/context/HelpProvider";

const HelpTrigger = ({ className }: { className?: string, category: ActiveHelpCategory }) => {
  const { toggleMenu } = useContext(MenusContext);
  const { dispatch } = useContext(HelpContext);

  return (
    <Button
      asLink
      onClick={() => {
        dispatch({
          type: 'SET_HELP_CATEGORY',
          payload: 'task-management'
        })
        toggleMenu('help-menu')
      }}
      className={`bg-sand_day px-0 ${className ? className : ''}`}
      ariaLabel="open help menu"
    >
      <FaQuestion />
    </Button>
  )
};

export default HelpTrigger;
