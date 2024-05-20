'use client'
import H3 from "@/components/core/typography/H3";
import Button from "@/components/core/utility/button";
import TextInput from "@/components/core/form-elements/inputs/text-input";
import HR from "@/components/core/presentational/HR";
import { useState } from "react";
import P from "@/components/core/typography/P";
import { useSession } from "next-auth/react";

const handleCreateOrganization = async ({ title, user}) => {
  const body = JSON.stringify({title, user});
  const response = await fetch('/api/organizations', { method: 'POST', body });
  console.log('response', response)
};



const CreateOrganization = () => {
  const [title, setTitle] = useState("");
  const { data: session } = useSession();

  return (
    <>
      <form className="p-2">
        <H3 className="text-lg">Create a new Organization</H3>
        <div className="p-2">
          {/* {result.data?.success ? <P>{result.data.success}</P> : null} */}
          <TextInput name="title" label="Title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <Button
            className="px-3 w-full lg:w-40 block lg:ml-auto"
            onClick={() => {
              handleCreateOrganization({ title, user: session.user })
            }}
          >
            Create Organization
          </Button>
        </div>
      </form>
    </>
  )
};

const JoinOrganization = () => {
  const [organization, setOrganization] = useState<string>('');
  const [searching, setSearching] = useState<boolean>(true);

  return (
    <>
      <form className="p-2">
        <H3 className="text-lg">Join existing Organization</H3>
        <div className="p-2">
          <TextInput
            type="search"
            name="title-search"
            label="Organization"
            placeholder="Start typing to search"
          />
          <Button
            className="px-3 w-full lg:w-40 block lg:ml-auto"
          >
            Join Organization
          </Button>
        </div>
      </form>
    </>
  )
}

const OrganizationForm = () => {
  return (
    <>
      <CreateOrganization />
      <HR text="OR" />
      <JoinOrganization />
    </>
  )
};

export default OrganizationForm;
