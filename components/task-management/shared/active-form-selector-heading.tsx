'use client'
import HR from "@/components/core/utility/HR";
// import H1 from "@/components/core/typography/H1";
import H2 from "@/components/core/typography/H2";
import Button from "@/components/core/utility/button";
import { TaskManagementContext } from "@/context/TaskManagementProvider";
import { useContext } from "react";
import { ITaskManagementResources, TaskManagementActions } from "@/context/task-management/types-actions";

const ActiveFormSelector = ({ type }: { type: ITaskManagementResources }) => {
  const { state, dispatch } = useContext(TaskManagementContext);
  const openToggle = state.activeResource === type ? null : type;

  return (
    <>
      <div className="flex justify-between items-center">
        <H2 className="!text-left text-xl capitalize">Your {type}s</H2>
        <Button
          asLink
          onClick={() => {
            dispatch({
            type: TaskManagementActions.SET_ACTIVE_RESOURCE,
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

export default ActiveFormSelector;
