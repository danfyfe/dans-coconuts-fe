interface ISunProps {
    day: Boolean
};

const Sun = ({ day }: ISunProps) => (
    <div className={`${day ? 'bg-sun' : 'bg-moon'} h-sun w-sun rounded-full absolute top-[2%] left-[2%]`} />
);

export default Sun
