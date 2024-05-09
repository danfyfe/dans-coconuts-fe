import useWeather from "@/lib/hooks/useWeather";
import Loading from "../core/loaders/loading";
import H2 from "../core/typography/H2";
import P from "../core/typography/P";
import { useContext } from "react";
import { WeatherContext } from "@/context/WeatherProvider";
import WeatherToggle from "./weather-toggle";

const WeatherWidgetDisplay = () => {
  const { loading, forecast, temperature, day } = useWeather();
  const { displayWeather } = useContext(WeatherContext);

  return (
    <>
      {
        loading ? (
          <Loading className="bg-transparent" />
        ) : (
          <>
            <H2 className="text-base text-left">Current weather in Miami Beach</H2>
            <hr />
            <ul>
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
          </>
        )
      }
    </>
  )
};

export default WeatherWidgetDisplay;
