import ContentContainer from "../core/containers/content-container";
import FakeStoreHeader from "./fake-store-header";
import ListingContainer from "./listing-container";
import { getCategories, getProducts } from "@/app/actions/fake-store";
import FilterSortListingClient from "./results/filter-sort-listing-client";
import { IFakeStoreFilterValueTypes } from "@/context/fake-store/values";


const FakeStore = async ({ filter, sort }: { filter: IFakeStoreFilterValueTypes; sort: any }) => {
  const productsResponse = await getProducts({ filter, sort });
  const { products } = await productsResponse.json();
  const categoriesResponse = await getCategories();
  const { categories } = await categoriesResponse.json();

  return (
    <ContentContainer className="md:!w-3/4">
      <FakeStoreHeader />
      <ListingContainer>
        <FilterSortListingClient categories={categories} products={products} />
      </ListingContainer>
    </ContentContainer>
  )
};

export default FakeStore;
