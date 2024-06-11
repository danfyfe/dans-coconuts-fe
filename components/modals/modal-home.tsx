'use client'

import { ModalContext } from "@/context/ModalProvider";
import { useContext } from "react";
import ContentContainer from "../core/containers/content-container";
import Modal from "../core/modal";

const HomePageModal = () => {
  const { open, setOpen } = useContext(ModalContext);
  console.log('in homepage', open)
  return (
    <Modal open={open} setOpen={setOpen}>
      MODAL
      {/* <ContentContainer>
        Content
      </ContentContainer> */}
    </Modal>
  )

};

export default HomePageModal;
