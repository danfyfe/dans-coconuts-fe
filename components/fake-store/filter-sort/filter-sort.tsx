import FilterSortProductContainer from "../filter-sort-products-container";
import { ProductCategory } from "../types";
import Filter from "./filter";
import Sort from "./sort";

const FilterSort = ({ categories }: { categories: ProductCategory[]}) => {

  return (
    <FilterSortProductContainer className="md:w-1/4">
      <Filter />
      <Sort />
    </FilterSortProductContainer>
  )
};

export default FilterSort;
