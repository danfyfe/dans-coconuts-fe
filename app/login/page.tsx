import ContentContainer from "@/components/core/containers/content-container";
import LoginForm from "./login-form";
import { Metadata } from 'next';
import CoconutContainer from "@/components/coconuts/coconut-container";

export const metadata: Metadata = {
  title: "Dan's Coconuts | Login",
  description: 'Just a beach...'
}

const LoginPage = () => (
  <>
    <CoconutContainer />
    <ContentContainer className="">
      <LoginForm />
    </ContentContainer>
  </>
);

export default LoginPage;
