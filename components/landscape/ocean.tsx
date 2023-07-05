import { FC } from 'react';

interface OceanProps {
    children: React.ReactNode
}

const Ocean: FC<OceanProps> = ({ children }) => (
    <div className="bg-ocean_night h-ocean text-white">
        {children}
    </div>
);

export default Ocean;
