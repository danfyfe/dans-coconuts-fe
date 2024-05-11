import useWeather from "@/lib/hooks/useWeather";
import Loading from "../core/loaders/loading";
import H2 from "../core/typography/H2";
import P from "../core/typography/P";
import WeatherToggle from "./weather-toggle";

const WeatherWidgetDisplay = () => {
  const { loading, forecast, temperature, day } = useWeather();

  return (
    <>
      {
          <>
            <H2 className="text-base text-right">Current weather in Miami Beach</H2>
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
            <P className="text-xs">*Hourly forecast from the National Weather Service API</P>
          </>
      }
    </>
  )
};

export default WeatherWidgetDisplay;
