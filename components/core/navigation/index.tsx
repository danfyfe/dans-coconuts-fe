'use client'
import LinkNavTrigger from "./link-nav-trigger";
import LinkNavMenu from "./link-nav-menu";
import { usePathname } from 'next/navigation'
import AddCoconut from "@/components/coconuts/add-coconut";
import WeatherWidgetTrigger from "@/components/weather/weather-widget-trigger";
import WeatherWidget from "@/components/weather/weather-widget";
import HelpMenu from "@/components/help/help-menu";

const Menus = () => {
  const pathname = usePathname();

  return (
    <nav className={`
      absolute w-full top-0 md:right-0 flex flex-col justify-start items-end z-[1000]
      transition-all h-auto
    `}>
      <LinkNavTrigger />
      <div className="absolute right-16 flex items-center justify-center">
        {
          pathname === '/coconuts' ? (
            <AddCoconut />
          ): null
        }
        <WeatherWidgetTrigger />
      </div>
      <LinkNavMenu />
      <WeatherWidget />
      <HelpMenu />
    </nav>
  )
};

export default Menus;
