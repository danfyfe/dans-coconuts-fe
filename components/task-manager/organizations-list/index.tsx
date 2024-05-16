'use client'
import ContentContainer from "@/components/core/containers/content-container";
import H1 from "@/components/core/typography/H1";
import P from "@/components/core/typography/P";
import Button from "@/components/core/utility/button";
import HelpTrigger from "@/components/help/help-trigger";
import { useSession } from "next-auth/react";

const OrganizationsList = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <ContentContainer className="md:w-5/6 md:py-2 md:px-4">
      <div className="flex justify-center">
        <H1 className="!text-2xl">Task Management</H1>
        <HelpTrigger className="text-xs mb-4" />
      </div>
      <div className="relative overflow-auto max-h-[90%]">

      </div>
    </ContentContainer>
  )  
};

export default OrganizationsList;
