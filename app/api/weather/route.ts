async function GET() {
    const url = 'https://api.weather.gov/gridpoints/MFL/112,52/forecast/hourly';
    const data = await fetch(url).then((r => r.json()))
    return data;
};

export {
    GET
}
