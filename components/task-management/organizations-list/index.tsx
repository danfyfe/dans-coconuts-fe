'use client'
import ContentContainer from "@/components/core/containers/content-container";
import OrganizationsListDisplay from "./organizations-list-display";
import { useSession } from "next-auth/react";
import TaskManagementHeader from "../task-management-header";

const OrganizationsList = ({ userSlug }: { userSlug: string }) => {
  const { data: session } = useSession();
  const user = session?.user;
  // TODO: refacter logic out of component and make HOC
  return (
    <ContentContainer className="md:py-5">
      <TaskManagementHeader />
      <OrganizationsListDisplay organizations={[]} userSlug={userSlug} />
    </ContentContainer>
  )  
};

export default OrganizationsList;
