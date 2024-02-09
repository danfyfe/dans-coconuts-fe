import VerifyDan from "@/components/verify-dan";
import LandscapeContainer from "@/components/core/containers/landscape-container";
import ContentContainer from "@/components/core/containers/content-container";

const NewPostVerification = () => (
  <LandscapeContainer>
    <ContentContainer className="flex justify-center items-center">
      <VerifyDan />
    </ContentContainer>
  </LandscapeContainer>
);

export default NewPostVerification;
