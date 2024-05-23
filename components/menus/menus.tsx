import WeatherWidget from "@/components/weather/weather-widget";
import LinkNavMenu from "../core/navigation/link-nav-menu";
import HelpMenu from "@/components/help/help-menu";

const Menus = () => {
  return (
    <>
      <LinkNavMenu />
      <WeatherWidget />
      <HelpMenu />
    </>

  )
};

export default Menus;
