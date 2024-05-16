import { MenusContext } from "@/context/MenusProvider";
import { useContext } from "react";
import MenuWrapper from "../core/containers/menu-container";
import WeatherWidgetDisplay from "./weather-widget-display";

const WeatherWidget = () => {
  const { activeMenu, toggleMenu } = useContext(MenusContext);
  const weatherWidgetOpen = activeMenu === 'weather-widget';

  return (
    <MenuWrapper id="weather-widget">
      <div
        className={`
          ${weatherWidgetOpen ? 'visible' : 'invisible'}
        `}
      >
        {
          weatherWidgetOpen ? <WeatherWidgetDisplay /> : null
        }
      </div>

    </MenuWrapper>
  )
};

export default WeatherWidget;
