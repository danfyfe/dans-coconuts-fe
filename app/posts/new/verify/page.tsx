import VerifyDan from "@/components/verify-dan";
import LandscapeContainer from "@/components/core/containers/landscape-container";
import ContentContainer from "@/components/core/containers/content-container";
import checkCookie from "@/lib/checkCookie";
import { redirect } from "next/navigation";

const NewPostVerification = () => {
  const verifiedDan = checkCookie(
    process.env.NEXT_PUBLIC_VERIFIED_DAN_COOKIE_NAME,
    process.env.NEXT_PUBLIC_VERIFIED_DAN_COOKIE_VALUE
  );

  if (verifiedDan) redirect('/posts/new');

  return (
    <LandscapeContainer>
      <ContentContainer className="flex justify-center items-center">
        <VerifyDan />
      </ContentContainer>
    </LandscapeContainer>
  )
};

export default NewPostVerification;
