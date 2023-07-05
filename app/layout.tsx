import { FC } from 'react';
import {
    Sky,
    Sun,
    Ocean,
    Sand
} from '../components/landscape'
import ContentContainer from '@/components/containers/content-container';
import '../styles/globals.css';
import Tide from '@/components/landscape/tide';
import { GET } from './api/weather/route';
import getCurrentPeriod from '@/lib/getCurrentPeriod';

interface RootLayout {
    children: React.ReactNode
}

const RootLayout: FC<RootLayout> = async ({ children }) => {
    // get weather prop from call
    const response = await GET();
    if (response?.properties?.periods) {
        const currentPeriod = getCurrentPeriod(response.properties.periods);
    }
    // console.log('response', response)
    return (
        <html lang="en">
            <body>
                <main id="main-content relative">
                    <Sky>
                        {/* <Sun/> */}
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
                        {/* <ContentContainer> */}
                        {children}
                        {/* </ContentContainer> */}
                    </Sand>
                </main>
            </body>
        </html>
    )
};

export default RootLayout;
