import MenuWrapper from "../core/containers/menu-container";
import HelpMenuDisplay from "./help-menu-display";

const HelpMenu = () => {
  return (
    <MenuWrapper id="help-menu" className="!w-5/6 md:!w-1/2 lg:!w-1/3">
      <HelpMenuDisplay />
    </MenuWrapper>
  )
};

export default HelpMenu;
