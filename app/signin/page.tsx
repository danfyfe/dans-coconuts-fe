'use client'
import { signIn, auth, providerMap } from "@/auth"
import CoconutContainer from "@/components/coconuts/coconut-container"
import ContentContainer from "@/components/core/containers/content-container"
import H1 from "@/components/core/typography/H1"
import P from "@/components/core/typography/P"
import Button from "@/components/core/utility/button"
import ProviderLogo from "@/lib/getProviderLogo"
 
export default function SignInPage({ searchParams }: { searchParams: { referer: string }}) {
  const { referer } = searchParams;
  const refererCheck = referer !== '/signin' && referer !== undefined;
  const refererPath = refererCheck ? referer : '/'; 

  return (
    <>
      <CoconutContainer />
      <ContentContainer className="md:w-1/4  j">
        <H1 className="mb-5">Sign In</H1>
        {Object.values(providerMap).map((provider, idx) => (
            <Button
              key={`provider-${provider.id}-${idx}`}
              id={`provider-${provider.id}-${idx}`}
              onClick={() => signIn(provider.id, { callbackUrl: refererPath })}
              className="flex justify-center items-center w-full mb-3 px-2"
            >
                <ProviderLogo provider={provider.name} />
                <span>Sign in with {provider.name}</span>
            </Button>
        ))}
        <P className="text-sm">What do you get for signing in?</P>
        <P className="text-sm">...nothing at the moment, just trying out OAuth 😁</P>
      </ContentContainer>
    </>
  )
};
