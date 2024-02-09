import ContentContainer from "@/components/core/containers/content-container";
import LandscapeContainer from "@/components/core/containers/landscape-container";
import H1 from "@/components/core/typography/H1";

const BlogIndex = () => {
  return (
    <LandscapeContainer>
      <ContentContainer>
        <H1>Here are some thoughts</H1>
      </ContentContainer>
    </LandscapeContainer>
  )
};

export default BlogIndex;
