import { FC } from 'react';

interface TideProps {
    day: Boolean
};

const Tide: FC<TideProps> = ({ day}) => <div className={`h-[10px] animate-tide border-b ${day ? 'bg-ocean_day' : 'bg-ocean_night'}`} />

export default Tide