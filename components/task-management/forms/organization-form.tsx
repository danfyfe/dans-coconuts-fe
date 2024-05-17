// 'use client'
import { createOrganization } from "@/actions/task-management/organizations";
import H3 from "@/components/core/typography/H3";
import Button from "@/components/core/utility/button";
import TextInput from "@/components/core/form-elements/inputs/text-input";
import HR from "@/components/core/presentation/HR";


const CreateOrganization = () => {
  return (
    <>
      <form action={createOrganization} className="p-2">
        <H3 className="text-lg">Create a new Organization</H3>
        <div className="p-2">
          <TextInput name="title" label="Title" placeholder="Title"/>
          <Button type="submit" className="w-full lg:w-auto">
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
      <form action={createOrganization} className="p-2">
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
      <HR text="OR" className="" />
      <JoinOrganization />
    </>
  )
};

export default OrganizationForm;
