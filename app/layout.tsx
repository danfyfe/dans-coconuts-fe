import { FC } from 'react';
import {
    Sky,
    Sun,
    Ocean,
    Sand
} from '../components/landscape'

interface RootLayout {
    children: React.ReactNode
}

const RootLayout: FC<RootLayout> = ({ children }) => (
    <html lang="en">
        <body>
        {console.log('inside layout')}
            <main id="main-content">
                <Sky>
                    <Sun/>
                </Sky>
                <Ocean>

                </Ocean>
                <Sand>
                    {children}
                </Sand>
            </main>
        </body>
    </html>
);

export default RootLayout;
