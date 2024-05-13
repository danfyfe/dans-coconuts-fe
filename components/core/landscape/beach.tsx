
interface SandProps {
    children?: React.ReactNode,
    day?: Boolean
}

const Sand = ({ children, day }: SandProps) => (
    <div className={`${day ? 'bg-sand_day' : 'bg-sand_night'} w-full min-h-fit relative`}>
        {children}
        <div className={` w-full h-sand bottom-0 ${day ? 'bg-sand_day' : 'bg-sand_night'}`}></div>
    </div>
);

export default Sand;
