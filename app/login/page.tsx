import ContentContainer from "@/components/core/containers/content-container";
import LoginForm from "./login-form";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts | Login",
  description: 'Just a beach...'
}

const LoginPage = () => (
  <ContentContainer className="flex flex-col w-3/4 md:w-1/4">
    <LoginForm />
  </ContentContainer>
);

export default LoginPage;
