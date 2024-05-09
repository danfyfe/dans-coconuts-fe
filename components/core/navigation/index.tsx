'use client'
import { useCallback, useState } from "react";
import NavTrigger from "./nav-trigger";
import NavMenu from "./nav-menu";
import { usePathname } from 'next/navigation'
import AddCoconut from "@/components/coconuts/add-coconut";
import WeatherWidgetTrigger from "@/components/weather/weather-widget-trigger";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className={`
      absolute w-full md:w-1/4 top-0 md:right-0 flex flex-col justify-start items-end z-[1000]
      transition-all h-auto
    `}>
      <NavTrigger />
      <div className="absolute right-16 flex items-center justify-center">
        {
          pathname === '/coconuts' ? (
            <AddCoconut />
          ): null
        }
        <WeatherWidgetTrigger />
      </div>
      <NavMenu />
    </nav>
  )
};

export default Navigation;
