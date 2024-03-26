
interface SandProps {
    children: React.ReactNode,
    day?: Boolean
}

const Sand = ({ children, day }: SandProps) => (
    <div className={`${day ? 'bg-sand_day' : 'bg-sand_night'} w-full min-h-fit relative`}>
        {children}
        <div className={`absolute w-full h-[50vh] ${day ? 'bg-sand_day' : 'bg-sand_night'}`}></div>
    </div>
);

export default Sand;
