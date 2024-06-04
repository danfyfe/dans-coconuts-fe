import { ReactNode } from "react";
import ContentContainer from "../core/containers/content-container";
import FakeStoreHeader from "./fake-store-header";
import { getProducts } from "@/app/actions/fake-store";

const ListingContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-5">
      {children}
    </div>
  )
}

const ProduceListing = async () => {
  const response = await getProducts();
  const products = await response.json();
  return (
    <div>
      ...products
    </div>
  )
};


const FakeStore = () => {
  return (
    <ContentContainer className="md:!w-3/4">
      <FakeStoreHeader />
      <ListingContainer>
        <ProduceListing />
      </ListingContainer>
    </ContentContainer>
  )
};

export default FakeStore;
