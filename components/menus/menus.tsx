import WeatherWidget from "@/components/weather/weather-widget";
import LinkNavMenu from "../core/navigation/link-nav-menu";
import HelpMenu from "@/components/help/help-menu";
import { IUser } from "@/models/User";

const Menus = ({ user }: { user: IUser | null }) => {
  return (
    <>
      <LinkNavMenu user={user}/>
      <WeatherWidget />
      <HelpMenu />
    </>

  )
};

export default Menus;
