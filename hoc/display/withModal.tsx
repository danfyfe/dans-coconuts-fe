import Modal from "@/components/core/modal";
import { ModalContext } from "@/context/ModalProvider";
import { IActiveTour } from "@/context/TourProvider";
import { ComponentType, useContext, useEffect } from "react";

interface IModalProps extends Object {
  type: IActiveTour
}

/**
 * withModal HOC
 * @description - supplies the passed in component with modal functionality controlled by the Modal component in "@/components/core/modal"
 * 
 */

const withModal = <P extends IModalProps>(Component: ComponentType<P>) => {
  const ComponentWithModal = (props: P) => {
    const { open, setOpen, setActiveModal } = useContext(ModalContext);

    useEffect(() => {
      // triggers modal on navigation
      if (props.type) {
        setActiveModal(props.type);
        setOpen(true);
      }
    }, [props.type, setActiveModal, setOpen]);

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
