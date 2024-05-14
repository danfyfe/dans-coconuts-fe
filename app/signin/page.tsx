import { signIn, auth, providerMap } from "@/auth"
import CoconutContainer from "@/components/coconuts/coconut-container"
import ContentContainer from "@/components/core/containers/content-container"
import H1 from "@/components/core/typography/H1"
import Button from "@/components/core/utility/button"
import { FaGithub } from "react-icons/fa"
 
export default async function SignInPage() {
  return (
    <>
      <CoconutContainer />
      <ContentContainer className="md:w-1/4  j">
        <H1 className="mb-5">SignIn</H1>
        {Object.values(providerMap).map((provider, idx) => (
          <form
            key={`provider-${provider.id}-${idx}`}
            className="flex justify-center items-center"
            action={async () => {
              "use server"
              await signIn(provider.id)
            }}
          >
            <Button type="submit" className="flex justify-start items-center">
              <FaGithub className="mr-2"/>
              <span>Sign in with {provider.name}</span>
            </Button>
          </form>
        ))}
      </ContentContainer>
    </>
  )
};
