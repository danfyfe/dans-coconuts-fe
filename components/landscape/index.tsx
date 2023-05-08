import { FC } from 'react';
import Sky from './sky';
import Sun from './sun';
import Ocean from './ocean';
import Sand from './beach';
import Header from '../header';

const Landscape: FC = () => (
    <section className="">
        <Sand>
            <Header>
                <Sky>
                    <Sun/>
                </Sky>
                <Ocean>
                </Ocean>
            </Header>
                {/* main content here? */}
        </Sand>
    </section>
);

export default Landscape;
