// 'use client'
import ContentContainer from "@/components/core/containers/content-container";
import TaskManagementHeader from "../shared/task-management-header";
import H2 from "@/components/core/typography/H2";
import { redirect } from "next/navigation";
import { TaskManagementContext } from "@/context/TaskManagementProvider";
import { useContext } from "react";
import ProjectsList from "../project-list";
import { getOrganizationByTitle } from "@/app/actions/organizations";

const Organization = async ({ orgTitle }: { orgTitle: string }) => {
  const decodedTitle = decodeURIComponent(orgTitle);
  const organization = await getOrganizationByTitle({ title: decodedTitle});
  // const { state } = useContext(TaskManagementContext);
  //   // get organization
  //   const organization = state.organizations?.find((org) => org.title === orgTitle);
  //   const projects = organization?.projects ?? [];

  //   if (!organization) {
  //     redirect('/')
  //   }
  
  return (
    <>
      <TaskManagementHeader />
      <ProjectsList />
    </>
  )
};

export default Organization;
