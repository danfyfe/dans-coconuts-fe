import { FC } from 'react';

interface SkyProps {
    children: React.ReactNode,
    day: Boolean
};

const Sky: FC<SkyProps> = ({ children, day }) => {
    return (
        <div className={`${day ? 'bg-sky_day_fair' : 'bg-sky_night_fair'} h-sky`}>
            {children}
        </div>
    )
};

export default Sky;
