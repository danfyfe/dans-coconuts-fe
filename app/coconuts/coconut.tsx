'use client'
import { useRouter } from "next/navigation";

interface CoconutProps {
    slug: string,
    key: string
};

const Coconut = ({ slug, key }: CoconutProps) => {
    const router = useRouter();
    const handleOnClick = () => {
        router.refresh();
    };
    console.log('reloaded')
    return(
        <button
            onClick={handleOnClick}
            className="block m-[4%]"
            key={key}
        >
            {slug}
        </button>
    )
};

export default Coconut;
