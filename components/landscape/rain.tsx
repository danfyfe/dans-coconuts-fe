'use client';
import { FC } from 'react';

interface RainDropProps {
    className: string
}

const RainDrops:FC<RainDropProps> = ({ className }) => (
    <span className={`${className} block whitespace-nowrap`}>/ / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /</span>
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

const Rain:FC<RainProps> = ({ precipitation }) => {
    return (
			<div className={`absolute overflow-hidden text-rain h-full w-full ${precipitation >= 80 ? 'opacity-100' : 'opacity-30'}`}>
				<RainDrops className="" />
				<RainDrops className="mr-1" />
			</div>
    )
};

export default Rain;
