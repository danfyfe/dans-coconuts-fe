import SignUpModal from "@/components/auth/signup"
import CoconutContainer from "@/components/coconuts/coconut-container"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts | Sign Up",
  description: "Sign Up for Dan's Coconuts"
}
 
export default function SignUpPage({ searchParams }: { searchParams: { referer: string }}) {
  const { referer } = searchParams;
  const refererCheck = referer !== '/signup' && referer !== undefined;
  const refererPath = refererCheck ? referer : '/'; 

  return (
    <>
      <CoconutContainer />
      <SignUpModal refererPath={refererPath} />
    </>
  )
};
