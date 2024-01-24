
interface SandProps {
    children: React.ReactNode,
    day: Boolean
}

const Sand = ({ children, day }: SandProps) => (
    <div className={`${day ? 'bg-sand_day' : 'bg-sand_night'} w-full h-screen`}>
        {children}
    </div>
);

export default Sand;
