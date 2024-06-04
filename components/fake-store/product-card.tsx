import { formatUSD } from "@/lib/formatting/formatUSD";
import H3 from "../core/typography/H3";
import P from "../core/typography/P";
import { Product } from "./types";
import Image from "next/image";

const ProductCard = ({
  title, price, category, image, rating
}: Partial<Product>) => {
  return (
    <article className="w-auto">
      <H3>{title}</H3>
      <P className="capitalize">{category}</P>
      <P>{!!price ? formatUSD(price): ''}</P>
      {
        !!title && !!image ? (
          <div>
            <Image 
              height={50}
              width={50}
              src={image}
              alt={title}
            />
          </div>
        ): null
      }
        {
          !!rating?.rate && !!rating?.count ? (
            <div>
              <P>Rating: {rating.rate}</P>
              <P>{rating.count} ratings</P>
            </div>
          ) : null
        }
    </article>
  )
};

export default ProductCard;
