'use client'

import { ModalContext } from "@/context/ModalProvider";
import { useContext } from "react";
import ContentContainer from "../core/containers/content-container";
import Modal from "../core/modal";

const HomePageModal = () => {
  const { open, toggleOpen } = useContext(ModalContext);

  return (
    <Modal open={true}>
      MODAL
      {/* <ContentContainer>
        Content
      </ContentContainer> */}
    </Modal>
  )

};

export default HomePageModal;
