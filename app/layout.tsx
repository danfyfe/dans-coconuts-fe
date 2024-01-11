import { FC } from 'react';
import {
    Sky,
    Sun,
    Ocean,
    Sand
} from '../components/landscape'
import '../styles/globals.css';
import Tide from '@/components/landscape/tide';


interface RootLayout {
    children: React.ReactNode
}

const RootLayout: FC<RootLayout> = ({ children }) => (
    <html lang="en">
        <body>
            <main id="main-content relative">
                <Sky>
                    <Sun/>
                </Sky>
                <Ocean>
                    <div className='ml-[25vw]'>
                    ~~~~~~~~~~~~
                    </div>
                    <div className='ml-[50vw]'>
                    ~~~~~~~~~~~~
                    </div>
                    {/* fish, etc */}
                </Ocean>
                <Sand>
                    <Tide />
                    {children}
                </Sand>
            </main>
        </body>
    </html>
);

export default RootLayout;
