'use client'
import { addOrganization, createOrganization } from "@/actions/task-management/organizations";
import { useAction } from "next-safe-action/hooks";
import H3 from "@/components/core/typography/H3";
import Button from "@/components/core/utility/button";
import TextInput from "@/components/core/form-elements/inputs/text-input";
import HR from "@/components/core/presentational/HR";
import { useState } from "react";
import P from "@/components/core/typography/P";


const CreateOrganization = () => {
  const [title, setTitle] = useState("");
  const { execute, result } = useAction(createOrganization);
  console.log(result)
  return (
    <>
      <form className="p-2">
        <H3 className="text-lg">Create a new Organization</H3>
        <div className="p-2">
          {result.data?.success ? <P>{result.data.success}</P> : null}
          <TextInput name="title" label="Title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <Button className="w-full lg:w-auto" onClick={() => execute({ title} )}>
            Create Organization
          </Button>
        </div>
      </form>
    </>
  )
};

const JoinOrganization = () => {
  return (
    <>
      <form action={addOrganization} className="p-2">
        <H3 className="text-lg">Join existing Organization</H3>
        <div className="p-2">
          <TextInput name="title-search" label="Organization" placeholder="Start typing to search" />
          <Button type="submit" className="w-full lg:w-auto">
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
