import { FC } from 'react';

interface SandProps {
    children: React.ReactNode,
    day: Boolean
}

const Sand: FC<SandProps> = ({ children, day }) => (
    <div className={`${day ? 'bg-sand_day' : 'bg-sand_night'} h-sand`}>
        {children}
    </div>
);

export default Sand;
