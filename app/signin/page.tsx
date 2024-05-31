import SignInModal from "@/components/auth/signin"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts | Sign In",
  description: 'Sign In'
}
 
export default function SignInPage({ searchParams }: { searchParams: { referrer: string }}) {
  const { referrer } = searchParams;
  const refererCheck = referrer !== '/signin' && referrer !== undefined;
  const referrerPath = refererCheck ? referrer : '/'; 

  return (
    <>
      <SignInModal referrerPath={referrerPath} />
    </>
  )
};
