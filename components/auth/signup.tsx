'use client'
import { signIn, providerMap } from "@/auth"
import ContentContainer from "@/components/core/containers/content-container"
import H1 from "@/components/core/typography/H1"
import P from "@/components/core/typography/P"
import Button from "@/components/core/utility/button"
import ProviderLogo from "@/lib/getProviderLogo"
import HR from "../core/utility/HR"
import AuthForm from "./auth-form"
import { useSession } from "next-auth/react"

const SignUpModal = ({ refererPath }: { refererPath?: string }) => {
  // const { data: session } = useSession();
  return (
    <ContentContainer className="xl:w-1/4">
        <H1 className="mb-5">Sign Up</H1>
        {/* OAuth with GitHub */}
        {Object.values(providerMap).map((provider, idx) => (
            <Button
              key={`provider-${provider.id}-${idx}`}
              id={`provider-${provider.id}-${idx}`}
              onClick={() => {
                signIn(provider.id, { callbackUrl: refererPath }).then(() => {

                })
              }}
              className="flex justify-center items-center w-full mb-3 px-2"
            >
                <ProviderLogo provider={provider.name} />
                <span>Sign up with {provider.name}</span>
            </Button>
        ))}
        <HR text="OR" />
        <AuthForm type="signup" refererPath={refererPath} />
        <P className="text-xs text-center">Sign up to create a task management board</P>
      </ContentContainer>
  )
}

export default SignUpModal;
