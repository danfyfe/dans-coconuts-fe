import { LayoutProps } from "@/.next/types/app/layout";
import ContentContainer from "@/components/core/containers/content-container";
import LandscapeContainer from "@/components/core/containers/landscape-container";

const PostLayout = ({ children }: LayoutProps) => {
  return (
    <LandscapeContainer>
      <ContentContainer className="flex justify-center items-center">
        {children}
      </ContentContainer>
    </LandscapeContainer>
  )
};

export default PostLayout;
