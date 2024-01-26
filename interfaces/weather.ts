export interface Period {
	startTime: string
	endTime: string
	probabilityOfPrecipitation: {
		value: number
	}
	isDaytime: boolean
}

export interface WeatherResponse {
  properties?: {
    periods?: Period[]
  }
}

export interface WeatherHookData {
  day: boolean;
  raining: boolean;
  precipitation: number | undefined;
}