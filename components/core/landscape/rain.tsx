'use client';

interface RainDropProps {
    className?: string;
}

const RainDrop = ({ className }: RainDropProps) => 	<div className={`${className ? className : ''} absolute bg-rain-drop w-[calc(100%+2rem)] h-[calc(100vh+2rem)] bg-repeat`} />

const RainDrops = ({ raining }: { raining?: number }) => (
	<div className={`
		relative ${!!raining ? 'opacity-100' : 'opacity-0'}
		transition-opacity 
	`}>
		<RainDrop className="animate-[rain_1.5s_ease-out_infinite]" />
		<RainDrop className="animate-[rain_1.5s_ease-out_infinite_0.5s] top-[-2rem]" />
		<RainDrop className="animate-[rain_1.5s_ease-out_infinite_2s] top-[0.5rem] -left-[1.5rem]" />
		<RainDrop className="animate-[rain_1.5s_ease-out_infinite_2.5s] top-[0.5rem] -left-[1.5rem]" />
	</div>
);

// interface RainProps {
// 	precipitation: number | undefined
// }

const Rain = ({ raining }: { raining?: number }) => {
    return (
			<div id="rain" className={`
				absolute z-50 overflow-hidden text-rain h-full w-full
				${ !!raining ? 
					'visible opacity-30' :
					'collapse opacity-0'
				}
				transition-opacity delay-1000 duration-200
			`}>
				{/* {
					!!raining ? ( */}
						<RainDrops raining={raining}/>
					{/* ) : null
				} */}
			</div>
    )
};

export default Rain;
