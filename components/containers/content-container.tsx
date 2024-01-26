interface ContentContainerProps {
    children: React.ReactNode,
    className?: string
};

const ContentContainer = ({ children, className }: ContentContainerProps) => {
    return(
        <section 
            className={`
                absolute
                bg-sand_night
                border-black
                border-solid
                rounded
                border-2
                min-h-[75%]
                min-w-[75%]
                p-[5%]
                ${className ?? ''}
            `}
        >
            {children}
        </section>
    )
};

export default ContentContainer;
