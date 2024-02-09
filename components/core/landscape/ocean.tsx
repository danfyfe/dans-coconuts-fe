import { FC } from 'react';

interface OceanProps {
    children: React.ReactNode,
    day: Boolean
}

const Ocean: FC<OceanProps> = ({ children, day }) => (
    <div className={`${day ? 'bg-ocean_day' : 'bg-ocean_night'} h-ocean text-white`}>
        {children}
    </div>
);

export default Ocean;
