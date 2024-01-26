'use client'
import { useState, useEffect } from "react";
import { Period, WeatherResponse } from "@/interfaces/weather";

function getWeather(url: string): Promise<WeatherResponse> {
  return fetch(url).then((r) => r.json());
}


const useWeather = () => {
  const [weatherData, seWeatherData] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeather('https://api.weather.gov/gridpoints/MFL/112,52/forecast/hourly');
      seWeatherData(data);
    };
    fetchData();
  },[]);


	const currentDateTime = new Date();
	const parsedCurrentDateTime = Date.parse(currentDateTime.toISOString());
	const periods = weatherData?.properties?.periods;
	const currentPeriod:Period | undefined = periods?.find((p: Period) => (Date.parse(p.startTime) <= parsedCurrentDateTime) && Date.parse(p.endTime) >= parsedCurrentDateTime);
	const precipitation: number | undefined = currentPeriod?.probabilityOfPrecipitation?.value;
	const raining = !!precipitation && precipitation >= 50;
	const day = currentPeriod?.isDaytime ?? true;

  return {
    day,
    raining,
    precipitation
  }
};

export default useWeather;
