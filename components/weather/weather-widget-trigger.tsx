'use client'
import { useContext } from "react";
import ButtonIcon from "../core/utility/button-icon";
import { FaCloud, FaSun } from "react-icons/fa";
import { MenusContext } from "@/context/MenusProvider";

const WeatherWidgetTrigger = () => {
  const { handleToggleWeatherWidget } = useContext(MenusContext);

  return (
    <section>
        <ButtonIcon
          id="weather-widget-btn"
          ariaLabel="Toggle weather widget"
          className={`
          `}
          onClick={handleToggleWeatherWidget}
        >
          <FaCloud className="text-slate-500"/>
          <FaSun className="text-sun" />
        </ButtonIcon>
    </section>
  )
};

export default WeatherWidgetTrigger;
