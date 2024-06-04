import { ReactNode } from "react";
import ContentContainer from "../core/containers/content-container";
import FakeStoreHeader from "./fake-store-header";
import { getCategories, getProducts } from "@/app/actions/fake-store";

const ListingContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-3 flex flex-col md:flex-row">
      {children}
    </div>
  )
};

const FakeStoreContainer = ({ children, className }:
    { children: ReactNode; className: string; }) => {
  return (
    <div className={`
      border-[1px] border-coconut_brown rounded
      p-2
      ${className ? className : ''}
    `}>
      {children}
    </div>
  )
}

const FilterSort = async () => {
  const response = await getCategories();
  const categories = await response.json();
  return (
    <FakeStoreContainer className="md:w-1/3">
      ...side where user can filter or sort
    </FakeStoreContainer>
  )
};

const ProduceListing = async () => {
  const response = await getProducts();
  const products = await response.json();
  return (
    <FakeStoreContainer className="flex-1 md:ml-4 md:my-0 my-2">
      ...products
    </FakeStoreContainer>
  )
};


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
