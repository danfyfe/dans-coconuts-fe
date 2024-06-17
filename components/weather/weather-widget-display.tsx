'use client'
import useWeather from "@/lib/hooks/useWeather";
import Loading from "../core/loaders/loading";
import H2 from "../core/typography/H2";
import P from "../core/typography/P";
import WeatherToggle from "./weather-toggle";
import HR from "../core/utility/HR";

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
            <HR className="w-full !m-0 border-inherit"/>
            <ul className="mt-1">
              <li>
                <P>Forecast: {forecast}</P>
              </li>
              <li>
                <P>Temp: {temperature}&deg;F</P>
              </li>
            </ul>
            <WeatherToggle />
            <P className="text-xs">*Hourly forecast from the National Weather Service API</P>
          </>
        )
      }
    </>
  )
};

export default WeatherWidgetDisplay;
