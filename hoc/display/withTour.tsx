import Tour from "@/components/core/modal/tour-modal";
import { TourContext } from "@/context/TourProvider";
import { ComponentType, useContext } from "react";

const withModal = <P extends object>(Component: ComponentType<P>) => {
  const ComponentWithModal = (props: P) => {
    const { activeTour, setActiveTour } = useContext(TourContext);

    return (
      <>
        <Tour activeTour={activeTour} setActiveTour={setActiveTour}>
          <Component {...props} setActiveTour={setActiveTour} />
        </Tour>
      </>
    )
  }
  return ComponentWithModal;
};

export default withModal;
