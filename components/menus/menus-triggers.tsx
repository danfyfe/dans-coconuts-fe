'use client'
import LinkNavTrigger from "../core/navigation/link-nav-trigger";
import AddCoconut from "@/components/coconuts/add-coconut-button";
import WeatherWidgetTrigger from "@/components/weather/weather-widget-trigger";
import { usePathname } from "next/navigation";

const MenuTriggers = () => {
  const pathname = usePathname();
  return (
    <>
      <LinkNavTrigger />
      <div className="absolute right-16 flex items-center justify-center">
        {
          pathname === '/coconuts' ? (
            <AddCoconut />
          ): null
        }
        <WeatherWidgetTrigger />
      </div>
    </>
  )
};

export default MenuTriggers;
