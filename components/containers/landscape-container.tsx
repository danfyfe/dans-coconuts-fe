import { FC } from 'react';
import {
    Sky,
    Sun,
    Ocean,
    Sand
} from '@/components/landscape'
import Tide from '@/components/landscape/tide';

interface LandscapeContainerProps {
    children?: React.ReactNode
}

interface Period {
	startTime: string,
	endTime: string
}

const LandscapeContainer:FC<LandscapeContainerProps> = async () => {
	const data = await fetch('https://api.weather.gov/gridpoints/MFL/112,52/forecast/hourly').then((r => r.json()));
	const currentDateTime = new Date();
	const parsedCurrentDateTime = Date.parse(currentDateTime.toISOString());
	const periods = data.properties.periods;
	const currentPeriod = periods?.find((p: Period) => (Date.parse(p.startTime) <= parsedCurrentDateTime) && Date.parse(p.endTime) >= parsedCurrentDateTime);
	const day = currentPeriod?.isDaytime ?? true;
    return (
			<>
				<Sky day={day}>
					<Sun day={day}/>
				</Sky>
				<Ocean day={day}>
					<div className='-ml-[2vw] underline decoration-wavy'>
					~~~~~~~~~~~~
					</div>
					<div className='ml-[45vw] underline decoration-wavy'>
					~~~~~~~~~~~~
					</div>
					<div className='ml-[95vw] underline decoration-wavy'>
					~~~~~~~~~~~~
					</div>
					{/* fish, etc */}
				</Ocean>
				<Sand day={day}>
					<Tide day={day} />
				</Sand>
			</>
)};

export default LandscapeContainer;
