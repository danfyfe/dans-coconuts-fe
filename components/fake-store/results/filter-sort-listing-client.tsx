'use client'
import FilterSort from "../filter-sort/filter-sort";
import ProduceListing from "../products/product-listing";
import { Product, ProductCategory } from "../types";

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
