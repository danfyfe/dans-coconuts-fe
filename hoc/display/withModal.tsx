import Modal from "@/components/core/modal";
import { ModalContext } from "@/context/ModalProvider";
import { ComponentType, useContext } from "react";

const withModal = <P extends object>(Component: ComponentType<P>) => {
  const ComponentWithModal = (props: P) => {
    const { open, setOpen } = useContext(ModalContext);

    return (
      <>
        <Modal open={open} setOpen={setOpen}>
          <Component {...props} setOpen={setOpen} />
        </Modal>
      </>
    )
  }
  return ComponentWithModal;
};

export default withModal;
