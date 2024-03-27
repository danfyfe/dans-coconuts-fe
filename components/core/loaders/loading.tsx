'use client'

import Image from "next/image"

export default function Loading() {
    return(
        <div className="absolute w-full h-screen flex justify-center items-center bg-sand_day z-[1000]">
					<Image
						priority
						src="/images/coconut.png"
						alt="An image of a coconut - Loading"
						height={200}
						width={200}
						className="h-28 w-28 animate-[spin_1.5s_infinite]"
					/>
        </div>
    )
};
