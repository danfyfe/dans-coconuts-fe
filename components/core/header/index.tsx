interface HeaderProps {
    children: React.ReactNode
}

const Header = ({ children }: HeaderProps) => {
    return(
        <section className="flex flex-col relative">
            {children}
        </section>
    )
};

export default Header;
