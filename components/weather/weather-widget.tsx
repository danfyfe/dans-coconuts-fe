import { MenusContext } from "@/context/MenusProvider";
import { useContext } from "react";
import MenuWrapper from "../core/containers/menu-container";
import useWeather from "@/lib/hooks/useWeather";

const WeatherWidget = () => {
  const { weatherWidgetOpen } = useContext(MenusContext);
  const { loading } = useWeather();

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
