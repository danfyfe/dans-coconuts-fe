import ContentContainer from "@/components/core/containers/content-container";
import H1 from "@/components/core/typography/H1";
import H2 from "@/components/core/typography/H2";
import H3 from "@/components/core/typography/H3";
import P from "@/components/core/typography/P";
import NextLink from "@/components/core/utility/link";

const AboutPage = () => {
  return (
    <ContentContainer>
      <H1>About</H1>

        <H2 className="!text-left">About me</H2>
        <P className="mb-2">Stuff about me</P>

        <H2 className="!text-left">About this site</H2>
        
        <H3>How it&apos;s built</H3>
        <P className="mb-2">
          This site is built with React, Next, TypeScript, and Tailwind CSS.
        </P>

        <H3>Testing</H3>
        <P>
          Testing for this project is handled by Cypress. The test
          repo can be found on the <NextLink href="/github" className="underline">GitHub page</NextLink>.
        </P>
        <P></P>
 
    </ContentContainer>
  )
};

export default AboutPage;
