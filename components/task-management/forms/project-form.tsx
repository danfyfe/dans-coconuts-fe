'use client'
import { useContext, useState } from "react";
import { useSession } from "next-auth/react";
import H3 from "@/components/core/typography/H3";
import Button from "@/components/core/utility/button";
import TextInput from "@/components/core/form-elements/inputs/text-input";
import { TaskManagementContext } from "@/context/TaskManagementProvider";
import { TaskManagementActions } from "@/context/task-management/types-actions";
import { User } from "next-auth";
import { IUser } from "@/models/User";
// import HR from "@/components/core/presentational/HR";
// import P from "@/components/core/typography/P";
// import { createProject } from "@/app/actions/project";
// import { useMutation } from '@tanstack/react-query';


const CreateProject = () => {
  const [title, setTitle] = useState("");
  const { data: session } = useSession();
  const { state, dispatch } = useContext(TaskManagementContext);
  const user: User | undefined = session?.user;
  const payloadUser = { user }

  return (
    <>
      <form className="p-2">
        <H3 className="text-lg">Create a new Project</H3>
        <div className="p-2">
          {/* {result.data?.success ? <P>{result.data.success}</P> : null} */}
          <TextInput name="title" label="Title" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <Button
            className="px-3 w-full lg:w-40 block lg:ml-auto"
            onClick={() => {
              dispatch({
                type: TaskManagementActions.ADD_PROJECT,
                payload: {
                  title,
                  ...(user && { payloadUser })
                }
              });
              dispatch({
                type: TaskManagementActions.SET_ACTIVE_RESOURCE,
                payload: null
              })
            }}
          >
            Create Project
          </Button>
        </div>
      </form>
    </>
  )
};

const JoinProject = () => {
  const [project, setProject] = useState<string>('');
  const [searching, setSearching] = useState<boolean>(true);

  return (
    <>
      <form className="p-2">
        <H3 className="text-lg">Join existing Project</H3>
        <div className="p-2">
          <TextInput
            type="search"
            name="title-search"
            label="Organization"
            placeholder="Start typing title to search"
          />
          <Button
            className="px-3 w-full lg:w-40 block lg:ml-auto"
          >
            Join Project
          </Button>
        </div>
      </form>
    </>
  )
}

const ProjectForm = () => {
  return (
    <>
      <CreateProject />
      {/* <HR text="OR" />
      <JoinProject /> */}
    </>
  )
};

export default ProjectForm;
