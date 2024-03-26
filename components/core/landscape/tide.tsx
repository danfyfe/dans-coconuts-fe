interface ITideProps {
    day: Boolean
};

const Tide = ({ day }: ITideProps) => <div className={`h-[10px] animate-tide border-b ${day ? 'bg-ocean_day' : 'bg-ocean_night'}`} />

export default Tide