'use client'
import { useContext } from 'react';
import {
    Sky,
    Sun,
    Ocean,
    Sand,
		Rain,
		Clouds
} from '@/components/core/landscape'
import Tide from '@/components/core/landscape/tide';
// import useWeather from '@/lib/hooks/useWeather';
// import Loading from '../loaders/loading';
import { ILandscapeProps } from '@/interfaces/landscape';
import { WeatherContext } from '@/context/WeatherProvider';

const LandscapeContainer = ({ children }: ILandscapeProps) => {
	/**
	 * This component is used as the main layout of the site.
	 * It contains all of the beach/sky elements, and the weather.
	 * @params children - the main elements of the page
	 */
	  
	// TODO: refactor below to use actual value from useWeather once day/night mode is in
	const day = true;
	// const { raining, precipitation, loading } = useWeather();
	const { displayWeather, setRaining } = useContext(WeatherContext);

	// useEffect(() => {
	// 	setRaining(raining)
	// }, [raining, setRaining]);

	return (
			<>
			{
				<>
					{/* { !!displayWeather && raining && <Rain precipitation={precipitation} /> } */}
					<Rain raining={displayWeather} />
					<Sky day={day} raining={displayWeather}>
						<Clouds raining={displayWeather} />
						<Sun day={day}/>
					</Sky>
					<Ocean day={day}>
						<div className='-ml-[2vw] underline decoration-wavy opacity-50 animate-[fade-in-out_10s_ease-in-out_infinite_1s]'>
						~~~~~~~~~~~~
						</div>
						<div className='ml-[45vw] underline decoration-wavy opacity-50 animate-[fade-in-out_10s_ease-in-out_infinite_2s]'>
						~~~~~~~~~~~~
						</div>
						<div className='ml-[95vw] underline decoration-wavy opacity-50 animate-[fade-in-out_10s_ease-in-out_infinite_1.5s]'>
						~~~~~~~~~~~~
						</div>
						{/* fish, etc */}
					</Ocean>
					<Sand day={day}>
						<Tide day={day} />
					</Sand>
					{children}
				</>
			}
			</>
	)
};

export default LandscapeContainer;
