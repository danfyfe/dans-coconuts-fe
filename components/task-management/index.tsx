'use client'
import SignInModal from "../auth/signin";
import Loading from "../core/loaders/loading";
import ContentContainer from "../core/containers/content-container";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import encodeString from "@/lib/encodeString";

const TaskManager = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    // redirect to organizations list for user
    // uses GitHub name or string of 1 for user in routing because of lack of BE at the moment
    const name = session?.user?.name ?? '1';
    const encodedName = encodeString(name);
    redirect(`/task-management/${encodedName}/organizations`)
  }

  return (
    <>
      {
        status === 'loading' ? (
          <ContentContainer>
            <Loading />
          </ContentContainer>
        ) : (
          <SignInModal refererPath="/task-management"/>
        )
      }
    </>
  )
};

export default TaskManager;
