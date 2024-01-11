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

const RootLayout: FC<RootLayout> = ({ children }) => {
	const day = true;
	return (
    <html lang="en">
        <body>
            <main id="main-content" className="overflow-hidden">
                <Sky day={day}>
                    <Sun day={day}/>
                </Sky>
                <Ocean day={day}>
										<div className='-ml-[2vw] underline decoration-wavy'>
                    ~~~~~~~~~~~~
                    </div>
                    <div className='ml-[45vw] underline decoration-wavy'>
                    ~~~~~~~~~~~~
                    </div>
                    <div className='ml-[95vw] underline decoration-wavy'>
                    ~~~~~~~~~~~~
                    </div>
                    {/* fish, etc */}
                </Ocean>
                <Sand day={day}>
                    <Tide day={day} />
                    {children}
                </Sand>
            </main>
        </body>
    </html>
	)
};

export default RootLayout;
