import { ReactNode } from "react";
import ContentContainer from "@/components/core/containers/content-container"
import H1 from "@/components/core/typography/H1";
import P from "@/components/core/typography/P";
import NextLink from "../core/utility/link";

const GitHubContent = ({ children }: { children: ReactNode }) => (
  <ContentContainer className="" id="github-content-container">
    <H1 className="mb-4">GitHub Links</H1>
    <P className="text-lg mb-1">Check out my pinned repositories</P>
    <P className="text-sm mb-1 underline"><a href="https://github.com/danfyfe" target="_blank">Click here for the main profile page</a></P>
    <P className="my-2">
      Unfortunately, most past professional work experience and projects cannot be shared here, but I am happy to do a walkthrough.
      Reach out through the <NextLink href="/contact" className="underline">contact page</NextLink>.</P>
    <hr className="mb-4 border-coconut_brown rounded"/>
      { children }
    <P className="text-xs mt-4">*This page is built using the GitHub GraphQL endpoint</P>
  </ContentContainer>
);

export default GitHubContent;
