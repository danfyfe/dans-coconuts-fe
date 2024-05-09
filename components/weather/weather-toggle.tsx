'use client'
import ButtonIcon from "../core/utility/button-icon";
import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherProvider";
import { FaCloud, FaSun } from "react-icons/fa";
import setCookie from "@/lib/setCookie";
import P from "../core/typography/P";

const WeatherToggle = () => {
  const { displayWeather, setDisplayWeather, raining } = useContext(WeatherContext);
  const handleToggleClick = () => {
    const newValue = displayWeather ? 0 : 1;
    setCookie('dc-display-weather', newValue);
    setDisplayWeather(newValue);
  };

  const toggleText = displayWeather ? 'Bring back the Sun!' : 'We could use some rain!';

  return (
    <div className="flex justify-end items-center">
      <P>{toggleText}</P>
      <ButtonIcon
        id="weather-btn"
        ariaLabel={toggleText}
        className={`
          m-0 ml-1
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
    </div>
  )
};

export default WeatherToggle;
