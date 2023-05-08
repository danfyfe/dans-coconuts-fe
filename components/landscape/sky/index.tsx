import { FC } from 'react';

interface SkyProps {
    children: React.ReactNode
};

const Sky: FC<SkyProps> = ({ children }) => {
    return (
        <div className="bg-sky h-sky">
            {children}
        </div>
    )
};

export default Sky;
