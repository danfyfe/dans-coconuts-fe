import MenuWrapper from "../core/containers/menu-container";
import WeatherWidgetDisplay from "./weather-widget-display";

const WeatherWidget = () => {
  return (
    <MenuWrapper id="weather-widget">
      <WeatherWidgetDisplay />
    </MenuWrapper>
  )
};

export default WeatherWidget;
