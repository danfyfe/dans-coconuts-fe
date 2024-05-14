import SignInModal from "@/components/auth/signin"
import CoconutContainer from "@/components/coconuts/coconut-container"
import ContentContainer from "@/components/core/containers/content-container"
import H1 from "@/components/core/typography/H1"
import P from "@/components/core/typography/P"
import Button from "@/components/core/utility/button"
import ProviderLogo from "@/lib/getProviderLogo"
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts | Sign In",
  description: 'Sign in In with GitHub'
}
 
export default function SignInPage({ searchParams }: { searchParams: { referer: string }}) {
  const { referer } = searchParams;
  const refererCheck = referer !== '/signin' && referer !== undefined;
  const refererPath = refererCheck ? referer : '/'; 

  return (
    <>
      <CoconutContainer />
      <SignInModal refererPath={refererPath} />
    </>
  )
};
