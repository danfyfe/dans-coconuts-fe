import ContentContainer from "@/components/core/containers/content-container";
import SignUpForm from "./signup-form";
import { Metadata } from 'next';
import CoconutContainer from "@/components/coconuts/coconut-container";

export const metadata: Metadata = {
  title: "Dan's Coconuts | Sign Up",
  description: 'Just a beach...'
}

const SignUpPage = () => (
  <>
    <CoconutContainer />
    <ContentContainer className="flex flex-col w-3/4 md:w-1/4">
      <SignUpForm />
    </ContentContainer>
  </>
);

export default SignUpPage;
