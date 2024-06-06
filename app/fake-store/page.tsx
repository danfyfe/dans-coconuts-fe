import { Metadata } from "next";
import FakeStore from "@/components/fake-store";

export const metadata: Metadata = {
  title: "Dan's Coconuts | Fake Store",
  description: "A Fake store at Dan's Coconuts"
}

const FakeStorePage = () => {
  return (
    <>
      <FakeStore />
    </>
  )
};

export default FakeStorePage;
