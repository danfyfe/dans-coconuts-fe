'use client'
import ContentContainer from "@/components/core/containers/content-container";
import OrganizationsListDisplay from "./organizations-list-display";
import { useSession } from "next-auth/react";
import TaskManagementHeader from "../shared/task-management-header";

const OrganizationsList = ({ userSlug }: { userSlug: string }) => {
  // TODO: refacter logic out of component and make HOC
  return (
    <ContentContainer className="md:py-5">
      <TaskManagementHeader />
      <OrganizationsListDisplay  userSlug={userSlug} />
    </ContentContainer>
  )  
};

export default OrganizationsList;
