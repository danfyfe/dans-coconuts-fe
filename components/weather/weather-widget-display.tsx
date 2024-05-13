import useWeather from "@/lib/hooks/useWeather";
import Loading from "../core/loaders/loading";
import H2 from "../core/typography/H2";
import P from "../core/typography/P";
import WeatherToggle from "./weather-toggle";
import { FaRegSun, FaMoon } from "react-icons/fa";

const WeatherWidgetDisplay = () => {
  const { loading, forecast, temperature, day } = useWeather();

  return (
    <>
      {
        loading ? (
          <Loading className="bg-transparent" />
        ) : (
          <>
            <H2 className="text-base text-right">Current weather in Miami Beach</H2>
            <hr />
            <ul className="mt-1">
              <li className="flex justify-end items-center">
                {
                  day ? (
                    <FaRegSun className="text-sun"/>
                  ) : (
                    <FaMoon className="text-slate-500" />
                  )
                }
              </li>
              <li>
                <P>Forecast: {forecast}</P>
              </li>
              <li>
                <P>Temp: {temperature}&deg;F</P>
              </li>
            </ul>
            <div>
              {
                day ? (
                  <div></div>
                ) : (
                  <div></div>
                )
              }
            </div>
            <WeatherToggle />
            <P className="text-xs">*Hourly forecast from the National Weather Service API</P>
          </>
        )
      }
    </>
  )
};

export default WeatherWidgetDisplay;
