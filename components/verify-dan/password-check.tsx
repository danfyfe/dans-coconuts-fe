'use client'
import { ReactEventHandler, useCallback, useState } from "react";
import FlexContainer from "../core/containers/flex-container";
import Button from "../core/utility/button";
import H2 from "../core/typography/h2";
import TextInput from "../core/forms/inputs/text-input";
import { useRouter } from "next/navigation";
import setCookie from "@/lib/setCookie";

const PasswordCheck = ({ setRejected } : {
  setRejected: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const router = useRouter();
  const [passInput, setPassInput] = useState('');

  const handleDanCheck = () => {
    if (passInput === process.env.NEXT_PUBLIC_VERIFIED_DAN_PASS) {
      setCookie(
        process.env.NEXT_PUBLIC_VERIFIED_DAN_COOKIE_NAME ?? '',
        process.env.NEXT_PUBLIC_VERIFIED_DAN_COOKIE_VALUE ?? ''
      );
      router.push('/posts/new');
      return
    }
    setRejected(true);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setPassInput(target.value);
  };

  const handleNevermind = useCallback(() => {
    setRejected(true);
  }, [setRejected]);

  return (
    <FlexContainer>
      <H2>Prove it!</H2>
      <TextInput label="Password" className="mt-10" type="password" onChange={handleInputChange} />
      <FlexContainer className="md:flex-row mt-10">
        <Button
          className="mr-0 md:mr-10 mb-5 md:mb-0"
          onClick={handleDanCheck}  
        >
          I think that&apos;s it
        </Button>
        <Button onClick={handleNevermind}>
          ...nevermind
        </Button>
      </FlexContainer>
    </FlexContainer>
  )
};

export default PasswordCheck;
