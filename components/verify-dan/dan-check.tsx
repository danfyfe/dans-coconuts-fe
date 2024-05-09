'use client'
import { useCallback, useState } from "react";
import FlexContainer from "../core/containers/flex-container";
import Button from "../core/utility/button";
import H2 from "../core/typography/H2";

const DanCheck = ({ setSaysIsDan, setRejected } : { 
  setSaysIsDan: React.Dispatch<React.SetStateAction<boolean>>
  setRejected: React.Dispatch<React.SetStateAction<boolean>>
}) => {

  const handleClickYes = useCallback(() => {
    setSaysIsDan(true);
  }, [setSaysIsDan])

  const handleClickNo = useCallback(() => {
    setRejected(true);
  }, [setRejected]);

  return (
    <FlexContainer className="">
      <H2>Are you Dan?</H2>
      <FlexContainer className="md:flex-row mt-10">
        <Button
          className="mr-0 md:mr-10 mb-5 md:mb-0"
          onClick={handleClickYes}  
        >
          Yes
        </Button>
        <Button
          onClick={handleClickNo}
        >
          No
        </Button>
      </FlexContainer>
    </FlexContainer>
  )
};

export default DanCheck;
