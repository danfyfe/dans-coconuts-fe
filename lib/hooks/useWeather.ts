'use client'
import { useState, useEffect } from "react";
import { IPeriod, IWeatherResponse } from "@/interfaces/weather";

function getWeather(url: string): Promise<IWeatherResponse> {
  return fetch(url).then((r) => r.json());
}


const useWeather = () => {
  const [weatherData, seWeatherData] = useState<IWeatherResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWeather('https://api.weather.gov/gridpoints/MFL/112,52/forecast/hourly');
      seWeatherData(data);
      setLoading(false);
    };
    fetchData();
  },[]);


	const currentDateTime = new Date();
	const parsedCurrentDateTime = Date.parse(currentDateTime.toISOString());
	const periods = weatherData?.properties?.periods;
	const currentPeriod:IPeriod | undefined = periods?.find((p: IPeriod) => (Date.parse(p.startTime) <= parsedCurrentDateTime) && Date.parse(p.endTime) >= parsedCurrentDateTime);
	const precipitation: number | undefined = currentPeriod?.probabilityOfPrecipitation?.value;
	const raining = !!precipitation && precipitation >= 50;
	const day = true;

  return {
    day,
    raining,
    precipitation,
    loading
  }
};

export default useWeather;
