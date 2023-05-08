import { FC } from 'react';
import Landscape from '../landscape';

interface MainLandscapeLayoutProps {
    children: React.ReactNode
}

const MainLandscapeLayout: FC<MainLandscapeLayoutProps> = ({ children }) => (
    <main>
        <Landscape/>
    </main>
);

export default MainLandscapeLayout;
