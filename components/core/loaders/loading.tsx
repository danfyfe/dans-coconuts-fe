'use client'

import Image from "next/image"

export default function Loading({ className }: { className?: string}) {
    return(
        <div className={`
					relative w-full h-full m-2 flex flex-col
					justify-center items-center bg-sand_day
					z-[1000]
					${className ? className : ''}
				`}
					data-testid="loading-component"
				>
					<Image
						priority
						src="/images/coconut.png"
						alt="An image of a coconut - Loading"
						height={100}
						width={100}
						className="h-16 w-16 animate-[spin_1.5s_infinite]"
					/>
					<div className="overflow-hidden w-max mt-3">
						<span className=" animate-left-to-right relative">
							...Loading...
						</span>
					</div>
        </div>
    )
};
