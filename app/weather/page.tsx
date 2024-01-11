import { GET } from '../api/weather/route';
import getCurrentPeriod from '@/lib/getCurrentPeriod';
import ContentContainer from '@/components/containers/content-container';
 // // get weather prop from call
    // const response = await GET();
    // if (response?.properties?.periods) {
    //     const currentPeriod = getCurrentPeriod(response.properties.periods);
    // }

const Weather = () => {
    return (
        <ContentContainer className="">
            weather
        </ContentContainer>
    )
};

export default Weather;
