'use client'
import ContentContainer from "@/components/core/containers/content-container";
import OrganizationsListDisplay from "./organizations-list-display";
import { useSession } from "next-auth/react";
import TaskManagementHeader from "../task-management-header";
import { ORGANIZATIONS } from "@/data/task-management/orgs";

const OrganizationsList = ({ userSlug }: { userSlug: string }) => {
  const { data: session } = useSession();
  const user = session?.user;
  // TODO: refacter logic out of component and make HOC
  return (
    <ContentContainer className="">
      <TaskManagementHeader />
      <OrganizationsListDisplay organizations={ORGANIZATIONS} userSlug={userSlug} />
    </ContentContainer>
  )  
};

export default OrganizationsList;
