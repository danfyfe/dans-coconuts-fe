import { ReactNode } from "react";
import ContentContainer from "../core/containers/content-container";
import H1 from "../core/typography/H1";
import HelpMenuHeading from "../help/help-menu-heading";
import FakeStoreHeader from "./fake-store-header";

const ListingContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-5">
      {children}
    </div>
  )
}

const ProduceListing = () => {
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
