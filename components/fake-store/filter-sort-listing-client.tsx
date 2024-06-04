'use client'
import FilterSort from "./filter-sort";
import ProduceListing from "./product-listing";
import { Product, ProductCategory } from "./types";

const FilterSortListingClient = ({
  products, categories }: { products: Product[]; categories: ProductCategory[] }) => {

  return (
    <>
      <FilterSort categories={categories} />
      <ProduceListing products={products} />
    </>
  )
};

export default FilterSortListingClient;
