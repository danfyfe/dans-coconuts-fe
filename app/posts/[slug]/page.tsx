import { IPostSlugProps } from "@/interfaces/content";
import { examplePostData } from "@/data/exampleData";
import H1 from "@/components/core/typography/H1";
import P from "@/components/core/typography/P";
import FlexContainer from "@/components/core/containers/flex-container";

const Post = ({ params }: IPostSlugProps) => {
  const { slug } = params;
  // make call to get post by slug
  const postData = examplePostData;

  return (
    <>
      <FlexContainer className="mt-auto">
        <H1 className="text-center mb-8">{postData.title}</H1>
        <P>{postData.content}</P>
      </FlexContainer>
    </>
  )
};

export default Post;
