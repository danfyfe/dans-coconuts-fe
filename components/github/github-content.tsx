import { ReactNode } from "react";
import ContentContainer from "@/components/core/containers/content-container"
import H1 from "@/components/core/typography/H1";
import P from "@/components/core/typography/P";

const GitHubContent = ({ children }: { children: ReactNode }) => (
  <ContentContainer className="" id="github-content-container">
    <H1 className="mb-4">GitHub Links</H1>
    <P className="text-lg mb-1">Check out the repositories for this project</P>
    <hr className="mb-4 border-coconut_brown rounded"/>
      { children }
    <P className="text-xs mt-4">*This page is built using the GitHub GraphQL endpoint</P>
  </ContentContainer>
);

export default GitHubContent;
