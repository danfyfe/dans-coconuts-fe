import ContentContainer from "@/components/core/containers/content-container";
import OrganizationsListDisplay from "./organizations-list-display";
import { useSession } from "next-auth/react";
import TaskManagementHeader from "../shared/task-management-header";
import { getUserData } from "@/app/actions/users";

const OrganizationsList = async ({ userSlug }: { userSlug: string }) => {
  // TODO: refacter logic out of component and make HOC
  const userResp = await getUserData();
  const user = userResp.success ? userResp.user! : null;
  return (
    <ContentContainer className="md:py-5">
      <TaskManagementHeader />
      <OrganizationsListDisplay  userSlug={userSlug} user={user} />
    </ContentContainer>
  )  
};

export default OrganizationsList;
