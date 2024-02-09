'use client'
import {
    Sky,
    Sun,
    Ocean,
    Sand,
		Rain
} from '@/components/core/landscape'
import Tide from '@/components/core/landscape/tide';
import useWeather from '@/lib/hooks/useWeather';
import Loading from '../loaders/loading';
import { ILandscapeProps } from '@/interfaces/landscape';

const LandscapeContainer = ({ children }: ILandscapeProps) => {
	const { day, raining, precipitation, loading } = useWeather();
	return (
			<>
			{
				loading ? (
					<Loading />
				) : (
					<>
					{ raining && <Rain precipitation={precipitation} /> }
					<Sky day={day}>
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
				)
			}
			</>
	)
};

export default LandscapeContainer;
