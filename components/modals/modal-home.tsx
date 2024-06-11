'use client'
import ContentContainer from "../core/containers/content-container";
import withModal from "@/hoc/display/withModal";

const HomePageModal = () => {

  return (
    <ContentContainer>
      Content
    </ContentContainer>
  )
};

export default withModal(HomePageModal);
