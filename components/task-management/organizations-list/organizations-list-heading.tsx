'use client'
import HR from "@/components/core/presentation/HR";
import H2 from "@/components/core/typography/H2";
import Button from "@/components/core/utility/button";
import { TaskManagementContext } from "@/context/TaskMangementProvider";
import { useContext } from "react";
import { FaPlus } from "react-icons/fa";

const OrganizationsListHeading = () => {
  const { activeForm, setActiveForm } = useContext(TaskManagementContext);
  return (
    <>
      <div className="flex justify-between items-center">
        <H2 className="!text-left text-xl">Your Organizations</H2>
        <Button
          asLink
          onClick={() => setActiveForm('organization')}
          disabled={activeForm === 'organization' ?? undefined}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaPlus />
        </Button>
      </div>
    <HR />
    </>
  )
};

export default OrganizationsListHeading;
