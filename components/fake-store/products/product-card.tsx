import { formatUSD } from "@/lib/formatting/formatUSD";
import H3 from "../../core/typography/H3";
import P from "../../core/typography/P";
import { Product } from "../types";
import Image from "next/image";
import Ratings from "./ratings";

const ProductCard = ({
  title, price, category, image, rating
}: Partial<Product>) => {
  return (
    <article
      className="
        w-auto bg-white p-3 border-coconut_brown border-[1px]
        rounded flex flex-col justify-between items-center shadow-sm
      ">
      <H3 className="text-center w-full h-6 text-base overflow-hidden text-ellipsis whitespace-nowrap">{title}</H3>
      {
        !!title && !!image ? (
          <div className="mx-auto my-2 w-3/4 h-auto">
            <Image
              className="object-contain w-full h-full"
              height={50}
              width={50}
              src={image}
              alt={title}
              priority
              />
          </div>
        ): null
      }
      <div>
        <P className="text-center">{!!price ? formatUSD(price): ''}</P>
          {
            !!rating?.rate && !!rating?.count ? (
              <div className="text-xs text-center">
                <Ratings rating={rating.rate} />
                {/* <P>Rating: {rating.rate}</P> */}
                <P>{rating.count} ratings</P>
              </div>
            ) : null
          }
      </div>
    </article>
  )
};

export default ProductCard;
