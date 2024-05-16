import H2 from "@/components/core/typography/H2";
import Button from "@/components/core/utility/button";
import { FaPlus } from "react-icons/fa";

const OrganizationsListHeading = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <H2 className="!text-left text-xl">Your Organizations</H2>
        <Button asLink>
          <FaPlus />
        </Button>
      </div>
      <hr className="border-coconut_brown mb-2"/>
    </>
  )
};

export default OrganizationsListHeading;
