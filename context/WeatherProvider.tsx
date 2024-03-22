'use client'
import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface IWeatherContext {
  displayWeather: boolean;
  setDisplayWeather: Dispatch<SetStateAction<boolean>>
  raining: boolean;
  setRaining: Dispatch<SetStateAction<boolean>>
}

export const WeatherContext = createContext<IWeatherContext>({
  displayWeather: true,
  setDisplayWeather: () => {},
  raining: false,
  setRaining: () => {}
});

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [displayWeather, setDisplayWeather] = useState(true);
  const [raining, setRaining] = useState(false);
  return (
    <WeatherContext.Provider value={{ displayWeather, setDisplayWeather, raining, setRaining }}>
      {children}
    </WeatherContext.Provider>
  )
};
