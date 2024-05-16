'use client'
import { useContext } from "react";
import ButtonIcon from "../core/utility/button-icon";
import { FaCloud, FaSun } from "react-icons/fa";
import { MenusContext } from "@/context/MenusProvider";

const WeatherWidgetTrigger = () => {
  const { toggleMenu } = useContext(MenusContext);

  return (
    <section>
        <ButtonIcon
          id="weather-widget-btn"
          ariaLabel="Toggle weather widget"
          className={`
             md:hover:scale-105
          `}
          onClick={() => toggleMenu('weather-widget')}
        >
          <div className="-rotate-45 relative h-full w-full">
            <FaSun aria-label="sun icon" className="rotate-45 text-sun text-xl absolute right-[25%] bottom-[10%]"/>
            <FaCloud aria-label="cloud icon" className="rotate-45 text-slate-500 text-xl absolute left-[25%] top-[8%]"/>
          </div>
        </ButtonIcon>
    </section>
  )
};

export default WeatherWidgetTrigger;
