'use client'
import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface IWeatherContext {
  displayWeather: boolean;
  setDisplayWeather: Dispatch<SetStateAction<boolean>>
}

export const WeatherContext = createContext<IWeatherContext>({ displayWeather: true, setDisplayWeather: () => {}});

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [displayWeather, setDisplayWeather] = useState(true);
  return (
    <WeatherContext.Provider value={{ displayWeather, setDisplayWeather }}>
      {children}
    </WeatherContext.Provider>
  )
};
