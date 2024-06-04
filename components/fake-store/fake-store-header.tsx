import H1 from "@/components/core/typography/H1";
import HelpTrigger from "@/components/help/help-trigger";

const FakeStoreHeader = () => {
  return (
    <>
      <div className="flex justify-center">
        <H1 className="!text-2xl">Welcome to the fake store</H1>
        <HelpTrigger className="text-xs mb-4" category="fake-store" />
      </div>
    </>
  )
};

export default FakeStoreHeader;
