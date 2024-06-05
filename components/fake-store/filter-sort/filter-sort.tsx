'use client'
import FilterSortProductContainer from "../filter-sort-products-container";
import { ProductCategory } from "../types";

const FilterSort = ({ categories }: { categories: ProductCategory[]}) => {

  return (
    <FilterSortProductContainer className="md:w-1/3">
      filtering and sorting coming soon
    </FilterSortProductContainer>
  )
};

export default FilterSort;
