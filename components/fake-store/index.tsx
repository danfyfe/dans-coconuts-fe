import ContentContainer from "../core/containers/content-container";
import FakeStoreHeader from "./fake-store-header";
import ListingContainer from "./listing-container";
import FilterSort from "./filter-sort";
import ProduceListing from "./product-listing";


const FakeStore = () => {
  return (
    <ContentContainer className="md:!w-3/4">
      <FakeStoreHeader />
      <ListingContainer>
        <FilterSort />
        <ProduceListing />
      </ListingContainer>
    </ContentContainer>
  )
};

export default FakeStore;
