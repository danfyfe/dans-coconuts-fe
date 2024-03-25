'use client'
import ButtonIcon from "../core/utility/button-icon";
import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherProvider";
import { FaCloud, FaSun } from "react-icons/fa";
import setCookie from "@/lib/setCookie";

const WeatherToggle = () => {
  const { displayWeather, setDisplayWeather, raining } = useContext(WeatherContext);
  const handleToggleClick = () => {
    const newValue = displayWeather ? 0 : 1;
    setCookie('dc-display-weather', newValue);
    setDisplayWeather(newValue);
  };

  return (
    <>
      {
        raining ? (
          <ButtonIcon
            ariaLabel="Toggle weather"
            className={`
              ${!!displayWeather ? ' text-sun' : 'text-slate-500'}
            `}
            onClick={handleToggleClick}
          >
            {
              !!displayWeather ? (
                <FaSun />
              ) : (
                <FaCloud />
              )
            }
          </ButtonIcon>
        ) : null
      }
    </>
  )
};

export default WeatherToggle;
