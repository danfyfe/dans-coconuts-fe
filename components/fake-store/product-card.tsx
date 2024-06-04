import H3 from "../core/typography/H3";
import P from "../core/typography/P";
import { Product } from "./types";

const ProductCard = ({
  title, price, description, category, image, rating
}: Partial<Product>) => {
  return (
    <article className="w-auto">
      <H3>{title}</H3>
      <P>${price}</P>
    </article>
  )
};

export default ProductCard;
