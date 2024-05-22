'use client'
import ContentContainer from "@/components/core/containers/content-container";
import { useSession } from "next-auth/react";
import TaskManagementHeader from "../shared/task-management-header";
import ProjectListDisplay from "./project-list-display";

const ProductsList = ({ userSlug }: { userSlug: string }) => {
  // TODO: refacter logic out of component and make HOC
  return (
    <ContentContainer className="md:py-5">
      <TaskManagementHeader />
      <ProjectListDisplay  userSlug={userSlug} />
    </ContentContainer>
  )  
};

export default ProductsList;
