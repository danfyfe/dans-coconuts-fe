'use client'
import ContentContainer from "@/components/core/containers/content-container";
import TaskManagementHeader from "../task-management-header";
import H2 from "@/components/core/typography/H2";
import { redirect } from "next/navigation";
import { TaskManagementContext } from "@/context/TaskManagementProvider";
import { useContext } from "react";

const Organization = ({ orgTitle }: { orgTitle: string }) => {
  const { state } = useContext(TaskManagementContext);
    // get organization
    const organization = state.organizations?.find((org) => org.title === orgTitle);

    if (!organization) {
      redirect('/')
    }
  
  return (
    <ContentContainer className="md:w-5/6 md:py-2 md:px-4 min-h-[calc(100vh-25rem)]">
      <TaskManagementHeader />
      <H2 className="!text-left text-2xl">{organization.title}</H2>
    </ContentContainer>
  )
};

export default Organization;
