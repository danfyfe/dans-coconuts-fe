import { signOut } from "@/auth"
import CoconutContainer from "@/components/coconuts/coconut-container"
import ContentContainer from "@/components/core/containers/content-container"
import H1 from "@/components/core/typography/H1"
import Button from "@/components/core/utility/button"
import ProviderLogo from "@/lib/getProviderLogo"
 
export default async function SignInPage() {
  return (
    <>
      <CoconutContainer />
      <ContentContainer className="md:w-1/4  j">
        <H1 className="mb-5">Are you sure?</H1>
          <form
            className="flex justify-center items-center"
            action={async () => {
              "use server"
              await signOut()
            }}
          >
            <Button type="submit" className="flex justify-center items-center w-full mb-3 px-2">
              <span>Sign out</span>
            </Button>
          </form>
      </ContentContainer>
    </>
  )
};
