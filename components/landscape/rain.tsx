'use client';

interface RainDropProps {
    className: string
}

const RainDrop = () => 	<div className="bg-rain-drop w-full h-screen bg-repeat" />

const RainDrops = ({ className }: RainDropProps) => (
	<>
		<RainDrop />
	</>
);

interface RainProps {
	precipitation: number
}

/**
 * 
 * 
 * 
 * 
 * 
 * 
 */

const Rain = ({ precipitation }: RainProps) => {
    return (
			<div className={`absolute z-50 overflow-hidden text-rain h-full w-full ${precipitation >= 80 ? 'opacity-100' : 'opacity-30'}`}>
				<RainDrops className="" />
				{/* <RainDrops className="mr-1" /> */}
			</div>
    )
};

export default Rain;
