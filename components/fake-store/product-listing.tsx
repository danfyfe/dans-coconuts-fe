import { getProducts } from "@/app/actions/fake-store";
import FilterSortProductContainer from "./filter-sort-products-container";

const ProduceListing = async () => {
  const response = await getProducts();
  const products = await response.json();
  return (
    <FilterSortProductContainer className="flex-1 md:ml-4 md:my-0 my-2">
      <>
        {
          products.length > 0 ? (
            <>
            </>
          ) : (
            <></>
          )
        }
      </>
    </FilterSortProductContainer>
  )
};

export default ProduceListing;
