import { FC } from 'react';

interface HeaderProps {
    children: React.ReactNode
}

const Header: FC<HeaderProps> = ({ children }) => {
    return(
        <section className="flex flex-col relative">
            {children}
        </section>
    )
};

export default Header;
