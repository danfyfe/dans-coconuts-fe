import { ReactNode } from "react";
import ContentContainer from "@/components/core/containers/content-container"
import H1 from "@/components/core/typography/H1";
import P from "@/components/core/typography/P";

const GitHubContent = ({ children }: { children: ReactNode }) => (
  <ContentContainer className="flex flex-col w-3/4 md:w-1/4">
        <H1 className="mb-2">GitHub Links</H1>
        <P className="text-lg mb-4">Here are the links to the repositories used in this project</P>
          { children }
        <P className="text-sm mt-4">This page is built using the GitHub GraphQL endpoint</P>
      </ContentContainer>
);

export default GitHubContent;
