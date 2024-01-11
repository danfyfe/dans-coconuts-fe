async function GET() {
    const url = 'https://api.weather.gov/gridpoints/MFL/112,52/forecast/hourly';
    const data = await fetch('https://api.weather.gov/gridpoints/MFL/112,52/forecast/hourly').then((r => r.json()));
    return data;
};

export {
    GET
}
