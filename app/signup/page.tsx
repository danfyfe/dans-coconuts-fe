import SignUpModal from "@/components/auth/signup"
import CoconutContainer from "@/components/coconuts/coconut-container"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts | Sign Up",
  description: "Sign Up for Dan's Coconuts"
}
 
export default function SignUpPage({ searchParams }: { searchParams: { referrer: string }}) {
  const { referrer } = searchParams;
  const referrerCheck = referrer !== '/signup' && referrer !== undefined;
  const referrerPath = referrerCheck ? referrer : '/'; 

  return (
    <>
      <CoconutContainer />
      <SignUpModal referrerPath={referrerPath} />
    </>
  )
};
