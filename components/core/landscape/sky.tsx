interface ISkyProps {
    children: React.ReactNode,
    day?: Boolean
    raining?: number
};

const Sky = ({ children, day, raining }: ISkyProps) => {
    return (
        <div className={`
            ${!!raining ? 'bg-sky_day_rain' : 'bg-sky_day_fair'} h-sky
            duration-1000 transition-colors
        `}>
            {children}
        </div>
    )
};

export default Sky;
