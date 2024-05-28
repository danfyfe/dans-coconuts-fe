// 'use client'
import SignInModal from "../auth/signin";
import Loading from "../core/loaders/loading";
import ContentContainer from "../core/containers/content-container";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import encodeString from "@/lib/encodeString";
import { IUser } from "@/lib/models/User";

const TaskManager = ({ user }: { user: IUser | null }) => {
  // const { data: session, status } = useSession();

  // if (status === 'authenticated' || user?.username) {
  //   // redirect to organizations list for user
  //   // uses GitHub name or string of 1 for user in routing because of lack of BE at the moment
  //   // const name = session?.user?.name ?? '1';
  //   const encodedName = encodeString(user?.username ?? '');
  //   redirect(`/task-management/${encodedName}/organizations`)
  // }
  if (user?.username && user?.email) {
    const encodedUsername = encodeString(user.username!);
    redirect(`/task-management/${encodedUsername}/organizations`)
  };

  return (
    // <>
    // TODO: middleware means we don't need this auth check - refactor when updating OAuth
    //   {
    //     status === 'loading' ? (
    //       <ContentContainer>
    //         <Loading />
    //       </ContentContainer>
    //     ) : (
    //       <SignInModal refererPath="/task-management"/>
    //     )
    //   }
    // </>
    null
  )
};

export default TaskManager;
