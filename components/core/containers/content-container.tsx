'use client'
import useWeather from "@/lib/hooks/useWeather";
interface IContentContainerProps {
    children: React.ReactNode,
    className?: string
};

const ContentContainer = ({ children, className }: IContentContainerProps) => {
    const { day } = useWeather();
    return(
        <section 
            className={`
                absolute
                shadow-lg
                top-1/2
                left-1/2
                -translate-x-1/2
                -translate-y-1/2
                ${day ? 'bg-sand_day text-black' : 'bg-sand_night text-yellow-500'}
                border-black
                border-solid
                rounded
                border-2
                min-h-[75%]
                min-w-[75%]
                max-h-[calc(100vh-5rem)]
                p-[5%]
                z-[500]
                overflow-y-scroll
                ${className ?? ''}
            `}
        >
            {children}
        </section>
    )
};

export default ContentContainer;
