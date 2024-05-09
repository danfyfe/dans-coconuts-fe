import { MenusContext } from "@/context/MenusProvider";
import { useContext } from "react";
import MenuWrapper from "../core/containers/menu-container";
import WeatherWidgetDisplay from "./weather-widget-display";

const WeatherWidget = () => {
  const { weatherWidgetOpen } = useContext(MenusContext);

  return (
    <MenuWrapper open={weatherWidgetOpen} id="weather-widget-menu">
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
