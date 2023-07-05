interface Period {
    startTime: string;
    endTime: string;
}

interface WeatherData {
    windSpeed?: string;
    temperature?: string,
    forecast?: string
}

async function GET(request: Request) {
    const url = 'https://api.weather.gov/gridpoints/MFL/112,52/forecast/hourly';
    const data = await fetch(url).then((r => r.json()))
    return data;
};

export {
    GET
}
