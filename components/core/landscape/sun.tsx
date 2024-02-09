import React, { FC } from 'react';

interface SunProps {
    day: Boolean
};

const Sun: FC<SunProps> = ({ day }) => (
    <div className={`${day ? 'bg-sun' : 'bg-moon'} h-sun w-sun rounded-full absolute top-[2%] left-[2%]`} />
);

export default Sun
