'use client'
import { useState } from "react";
import ContentContainer from "@/components/core/containers/content-container";
import FlexContainer from "@/components/core/containers/flex-container";
import LandscapeContainer from "@/components/core/containers/landscape-container";
import H1 from "@/components/core/typography/H1";
import H2 from "@/components/core/typography/h2";
import Button from "@/components/core/utility/button";

const DanCheck = () => {
  return (
    <FlexContainer className="">
      <H2>Are you Dan?</H2>
      <FlexContainer className="md:flex-row mt-10">
        <Button className="mr-0 md:mr-10 mb-5 md:mb-0">
          Yes
        </Button>
        <Button>
          No
        </Button>
      </FlexContainer>
    </FlexContainer>
  )
};

const PasswordCheck = () => {
  return (
    <FlexContainer>
      <H2>Prove it!</H2>
    </FlexContainer>
  )
}

const NewBlog = () => {
  const [saysIsDan, setSaysIsDan] = useState(false);
  return (
    <LandscapeContainer>
      <ContentContainer>
        <DanCheck />
      </ContentContainer>
    </LandscapeContainer>
  )
};

export default NewBlog;

/**
 * 
 * 
 * check if dan by asking
 * 
 * password verification via env variable
 * 
 * form if dan
 * get out of here message if not
 * 
 */