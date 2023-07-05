import { FC } from 'react';

interface ContentContainerProps {
    children: React.ReactNode
};

const ContentContainer: FC<ContentContainerProps> = ({ children }) => {
    return(
        <section className="
                absolute
                top-[10%]
                left-[10%]
                bg-sand
                border-black
                border-solid
                rounded
                border-2
                min-h-[75%]
                min-w-[75%]
                p-[5%]
        ">
            {children}
        </section>
    )
};

export default ContentContainer;
