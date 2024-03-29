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
                ${day ? 'bg-sand_day' : 'bg-sand_night'}
                border-coconut_brown
                border-solid
                rounded
                border-2
                min-h-fit
                min-w-fit
                max-h-[calc(100vh-5rem)]
                p-5 md:p-10
                z-[500]
                ${className ?? ''}
            `}
        >
            {children}
        </section>
    )
};

export default ContentContainer;
