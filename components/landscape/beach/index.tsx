import { FC } from 'react';

interface SandProps {
    children: React.ReactNode
}

const Sand: FC<SandProps> = ({ children }) => (
    <div className="bg-sand h-sand">
        {children}
    </div>
);

export default Sand;
