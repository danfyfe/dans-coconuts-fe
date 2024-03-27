import ContentContainer from "@/components/core/containers/content-container";
import H1 from "@/components/core/typography/H1";
import LoginForm from "./login-form";

const LoginPage = () => {
  return (
    <ContentContainer className="flex flex-col w-3/4 md:w-1/4">
      <LoginForm />
    </ContentContainer>
  )
};

export default LoginPage;
