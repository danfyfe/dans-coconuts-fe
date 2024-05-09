import AboutMe from "@/components/about/about-me";
import AboutProject from "@/components/about/about-project";
import ContentContainer from "@/components/core/containers/content-container";
import H1 from "@/components/core/typography/H1";

const AboutPage = () => {
  return (
    <ContentContainer className="overflow-y-auto scrollbar-styles">
      <H1>About</H1>
      <AboutMe />
      <AboutProject />
    </ContentContainer>
  )
};

export default AboutPage;
