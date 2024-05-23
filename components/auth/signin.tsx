'use client'
import { signIn, providerMap } from "@/auth"
import ContentContainer from "@/components/core/containers/content-container"
import H1 from "@/components/core/typography/H1"
import P from "@/components/core/typography/P"
import Button from "@/components/core/utility/button"
import ProviderLogo from "@/lib/getProviderLogo"
import HR from "../core/utility/HR"
import AuthForm from "./auth-form"

const SignInModal = ({ refererPath }: { refererPath?: string }) => {
  return (
    <ContentContainer className="lg:w-1/4">
        <H1 className="mb-5">Sign In</H1>
        {/* OAuth with GitHub */}
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
        <HR text="OR" />
        <AuthForm type="signin" refererPath={refererPath}/>
        <P className="text-xs text-center">Sign in to access your task management board</P>
      </ContentContainer>
  )
}

export default SignInModal;
