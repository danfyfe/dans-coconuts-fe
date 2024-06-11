import { Metadata } from "next";
import FakeStore from "@/components/fake-store";
import { IFakeStoreFilterValueTypes } from "@/context/fake-store/values";

export const metadata: Metadata = {
  title: "Dan's Coconuts | Fake Store",
  description: "A Fake store at Dan's Coconuts"
}

const FakeStorePage = ({ searchParams }: any) => {
  const filter: IFakeStoreFilterValueTypes = searchParams.filter;
  const sort = searchParams.sort; // TODO: update when creating sort values
  return (
    <>
      <FakeStore filter={filter} sort={sort} />
    </>
  )
};

export default FakeStorePage;
