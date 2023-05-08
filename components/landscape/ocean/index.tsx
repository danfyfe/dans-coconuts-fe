import { FC } from 'react';

interface OceanProps {
    children: React.ReactNode
}

const Ocean: FC<OceanProps> = ({ children }) => (
    <div className="bg-ocean h-ocean">
        {children}
    </div>
);

export default Ocean;
