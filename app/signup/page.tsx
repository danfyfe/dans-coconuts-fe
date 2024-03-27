import ContentContainer from "@/components/core/containers/content-container";
import SignUpForm from "./signup-form";

const SignUpPage = () => {
  return (
    <ContentContainer className="flex flex-col w-3/4 md:w-1/4">
      <SignUpForm />
    </ContentContainer>
  )
};

export default SignUpPage;
