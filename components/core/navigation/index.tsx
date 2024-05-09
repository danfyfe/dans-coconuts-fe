'use client'
import LinkNavTrigger from "./link-nav-trigger";
import LinkNavMenu from "./link-nav-menu";
import { usePathname } from 'next/navigation'
import AddCoconut from "@/components/coconuts/add-coconut";
import WeatherWidgetTrigger from "@/components/weather/weather-widget-trigger";
import WeatherWidget from "@/components/weather/weather-widget";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={`
      absolute w-full md:w-1/4 top-0 md:right-0 flex flex-col justify-start items-end z-[1000]
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
    </nav>
  )
};

export default Navigation;
