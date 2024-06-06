import { Metadata } from "next";
import FakeStore from "@/components/fake-store";
import { UL } from "dans-coconuts-components";

export const metadata: Metadata = {
  title: "Dan's Coconuts | Fake Store",
  description: "A Fake store at Dan's Coconuts"
}

const FakeStorePage = () => {
  return (
    <>
    <UL>
      <li></li>
    </UL>
      <FakeStore />
    </>
  )
};

export default FakeStorePage;
