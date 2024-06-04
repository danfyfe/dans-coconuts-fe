import { getCategories } from "@/app/actions/fake-store";
import FilterSortProductContainer from "./filter-sort-products-container";

const FilterSort = async () => {
  const response = await getCategories();
  const categories = await response.json();
  return (
    <FilterSortProductContainer className="md:w-1/3">
      ...side where user can filter or sort
    </FilterSortProductContainer>
  )
};

export default FilterSort;
