'use client'
import { useContext } from "react";
import { HelpContext } from "@/context/HelpProvider";

const HelpMenuDisplay = () => {
  const { state } = useContext(HelpContext);
  console.log('state', state)
  return (
    <></>
  )
};

export default HelpMenuDisplay;
