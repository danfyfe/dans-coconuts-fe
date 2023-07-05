import { FC } from 'react';

interface SkyProps {
    children: React.ReactNode
};

const Sky: FC<SkyProps> = ({ children }) => {
    return (
        <div className="bg-sky_night_fair h-sky">
            {children}
        </div>
    )
};

export default Sky;
