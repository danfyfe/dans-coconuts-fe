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
    <ContentContainer className="md:w-5/6">
      <div className="relative overflow-auto max-h-[90%]">
        <H1 className="!text-2xl">Task Management</H1>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>

        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
        <P>asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf asdfasdfasdfasdfasdf</P>
      </div>
    </ContentContainer>
  )  
};

export default OrganizationsList;
