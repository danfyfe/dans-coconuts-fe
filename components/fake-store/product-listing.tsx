'use client'
import { getProducts } from "@/app/actions/fake-store";
import FilterSortProductContainer from "./filter-sort-products-container";
import ProductCard from "./product-card";
import { Product } from "./types";
import { Fragment } from "react";

const ProduceListing = ({ products }: { products: Product[]}) => {
  console.log(products)
  return (
    <FilterSortProductContainer
      className="flex-1 md:ml-4 md:my-0 my-2 overflow-auto"
    >
      <>
        {
          products.length > 0 ? (
            <>
            {
              products.map((product: Product, index: number) => {
                return (
                  <Fragment key={`product-card-${index}`}>
                    <ProductCard
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      category={product.category}
                      price={product.price}
                      image={product.image}
                      rating={product.rating}
                    />
                  </Fragment>
                )
              })
            }
            </>
          ) : (
            <>
              <div>no products</div>
            </>
          )
        }
      </>
    </FilterSortProductContainer>
  )
};

export default ProduceListing;
