'use client'
import { useCallback, useState } from "react";
import ContentContainer from "@/components/core/containers/content-container";
import FlexContainer from "@/components/core/containers/flex-container";
import LandscapeContainer from "@/components/core/containers/landscape-container";
import H1 from "@/components/core/typography/H1";
import H2 from "@/components/core/typography/h2";
import Button from "@/components/core/utility/button";
import NextLink from "@/components/core/utility/link";
import useCookieCheck from "@/hooks/useCookieCheck";

const DanCheck = ({ setSaysIsDan }) => {

  const handleClickYes = useCallback(() => {
    setSaysIsDan(true);
  }, [setSaysIsDan])

  const handleClickNo = useCallback(() => {

  }, []);

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
        <Button>
          No
        </Button>
      </FlexContainer>
    </FlexContainer>
  )
};

const PasswordCheck = ({ }) => {
  // const handleIsDan = useCallback(() => {
  //   setVerifiedDan(true);
  // }, [setVerifiedDan]);

  // const handleIsNotDa = useCallback(() => {
  //   setVerifiedDan(false);
  // }, [setVerifiedDan]);

  return (
    <FlexContainer>
      <H2>Prove it!</H2>
      <FlexContainer className="md:flex-row mt-10">
        <Button
          className="mr-0 md:mr-10 mb-5 md:mb-0"
          onClick={() => {}}  
        >
          I think that&apos;s it
        </Button>
        <Button >
          ...nevermind
        </Button>
      </FlexContainer>
    </FlexContainer>
  )
}

const NewBlog = () => {
  // make ENV variables
  const [isDan] = useCookieCheck({ cookieName:"verified-dan", cookieValue:"yup-thats-dan"});
  const [saysIsDan, setSaysIsDan] = useState(false);
  const [verifiedDan, setVerifiedDan] = useState(isDan);

  console.log('isDan?', isDan)
  return (
    <LandscapeContainer>
      <ContentContainer>
        {
          verifiedDan ? (
            <div>hi dan..this will be a form eventually</div>
          ) : (
            <>
              {
                saysIsDan ? (
                  <PasswordCheck />
                ): (
                  <DanCheck setSaysIsDan={setSaysIsDan}/>
                )
              }
            </>
          )
        }
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