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
              ${displayWeather ? ' text-sun' : 'text-slate-500'}
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
