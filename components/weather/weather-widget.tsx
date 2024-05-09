import { MenusContext } from "@/context/MenusProvider";
import { useContext } from "react";
import MenuWrapper from "../core/containers/menu-container";

const WeatherWidget = () => {
  const { weatherWidgetOpen } = useContext(MenusContext);
  console.log('open?', weatherWidgetOpen)
  return (
    <MenuWrapper open={weatherWidgetOpen} id="weather-widget-menu">
      <div
        className={`
          ${weatherWidgetOpen ? 'visible' : 'invisible'}
        `}
      >
        weather widget
      </div>

    </MenuWrapper>
  )
};

export default WeatherWidget;
