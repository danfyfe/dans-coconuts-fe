'use client'
import { useContext, useState } from "react";
import { useSession } from "next-auth/react";
import H3 from "@/components/core/typography/H3";
import Button from "@/components/core/utility/button";
import TextInput from "@/components/core/form-elements/inputs/text-input";
import { TaskManagementContext } from "@/context/TaskManagementProvider";
import { User } from "next-auth";
import { IUser } from "@/lib/models/User";
import { createOrganization } from "@/app/api/organizations/methods";
import { NewOrganization, TaskManagementActions } from "@/context/task-management/types-actions";
// import HR from "@/components/core/presentational/HR";
// import P from "@/components/core/typography/P";
// import { createOrganization } from "@/app/actions/organizations";
// import { useMutation } from '@tanstack/react-query';


const CreateOrganization = ({ user }: { user: IUser | null }) => {
  const [title, setTitle] = useState("");
  const { state, dispatch } = useContext(TaskManagementContext);
  const payloadUser = { user }

  return (
    <>
      <form className="p-2">
        <H3 className="text-lg">Create a new Organization</H3>
        <div className="p-2">
          {/* {result.data?.success ? <P>{result.data.success}</P> : null} */}
          <TextInput name="title" label="Title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <Button
            className="px-3 w-full lg:w-40 block lg:ml-auto"
            onClick={async () => {
              const newOrgResp = await createOrganization({ title, user });
              if (newOrgResp.success) {
                const organization: NewOrganization = newOrgResp.organization;
                dispatch({
                  type: TaskManagementActions.ADD_ORGANIZATION,
                  payload: organization
                });
                dispatch({
                  type: TaskManagementActions.SET_ACTIVE_RESOURCE,
                  payload: null
                })
              }
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

const OrganizationForm = ({ user }: { user: IUser | null }) => {
  return (
    <>
      <CreateOrganization user={user} />
      {/* <HR text="OR" />
      <JoinOrganization /> */}
    </>
  )
};

export default OrganizationForm;
