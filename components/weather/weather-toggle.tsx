'use client'
import ButtonIcon from "../core/utility/button-icon";
import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherProvider";
import { FaCloud, FaSun } from "react-icons/fa";

const WeatherToggle = () => {
  const { displayWeather, setDisplayWeather, raining } = useContext(WeatherContext);

  return (
    <>
      {
        raining ? (
          <ButtonIcon
            ariaLabel="Toggle weather"
            className={`
              absolute self-center h-12 w-12 right-16 m-3
              flex items-center justify-center
              ${displayWeather ? ' text-sun' : 'text-slate-500'}
              text-4xl bg-white bg-opacity-50 rounded-full
            `}
            onClick={() => setDisplayWeather(!displayWeather)}
          >
            {
              displayWeather ? (
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
