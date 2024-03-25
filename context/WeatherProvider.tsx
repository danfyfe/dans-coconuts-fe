'use client'
import { createContext, useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { getCookieNumberValue } from "@/lib/hooks/useCookieCheck";
interface IWeatherContext {
  displayWeather: number;
  setDisplayWeather: Dispatch<SetStateAction<number>>
  raining: boolean;
  setRaining: Dispatch<SetStateAction<boolean>>
}

export const WeatherContext = createContext<IWeatherContext>({
  displayWeather: 0,
  setDisplayWeather: () => {},
  raining: false,
  setRaining: () => {}
});

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [displayWeather, setDisplayWeather] = useState(0);
  const [raining, setRaining] = useState(false);

  useEffect(() => {
    const displayWeatherCookie = getCookieNumberValue({ cookieName: 'dc-display-weather' }) || 0;
    setDisplayWeather(displayWeatherCookie)
  }, [setDisplayWeather]);

  return (
    <WeatherContext.Provider value={{ displayWeather, setDisplayWeather, raining, setRaining }}>
      {children}
    </WeatherContext.Provider>
  )
};
