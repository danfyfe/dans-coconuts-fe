'use client'
import HR from "@/components/core/utility/HR";
// import H1 from "@/components/core/typography/H1";
import H2 from "@/components/core/typography/H2";
import Button from "@/components/core/utility/button";
import { TaskManagementContext } from "@/context/TaskManagementProvider";
import { useContext } from "react";

const OrganizationsListHeading = () => {
  const { state, dispatch } = useContext(TaskManagementContext);
  const openToggle = state.activeForm === 'organization' ? null : 'organization';

  return (
    <>
      <div className="flex justify-between items-center">
        <H2 className="!text-left text-xl">Your Organizations</H2>
        <Button
          asLink
          onClick={() => {
            dispatch({
            type: 'SET_ACTIVE_FORM',
            payload: openToggle
          })}}
        >
          {
            openToggle ?   (
              <>Add</>
            ) : (
              <>Cancel</>

            )
          }
        </Button>
      </div>
    <HR />
    </>
  )
};

export default OrganizationsListHeading;
