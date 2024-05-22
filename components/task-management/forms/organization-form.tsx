'use client'
import { useState } from "react";
import { useSession } from "next-auth/react";
import H3 from "@/components/core/typography/H3";
import Button from "@/components/core/utility/button";
import TextInput from "@/components/core/form-elements/inputs/text-input";
// import HR from "@/components/core/presentational/HR";
// import P from "@/components/core/typography/P";
// import { createOrganization } from "@/app/actions/organizations";
// import { useMutation } from '@tanstack/react-query';


const CreateOrganization = () => {
  const [title, setTitle] = useState("");
  const { data: session } = useSession();
  const user = session?.user;

  // TODO: handle issues connecting to MongoDB when deployed
  // const { 
  //   data,
  //   mutate: server_createOrganization
  // } = useMutation({
  //   mutationFn: createOrganization
  // });
  // console.log(data)

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
              // server_createOrganization({ title, ...(!!user && { user }) })
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
      {/* <HR text="OR" />
      <JoinOrganization /> */}
    </>
  )
};

export default OrganizationForm;
