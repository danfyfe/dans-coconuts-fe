export interface IPeriod {
	startTime: string
	endTime: string
	probabilityOfPrecipitation: {
		value: number
	}
	isDaytime: boolean
  temperature: number
  shortForecast: string
}

export interface IWeatherResponse {
  properties?: {
    periods?: IPeriod[]
  }
}

export interface IWeatherHookData {
  day: boolean;
  raining: boolean;
  precipitation: number | undefined;
}
