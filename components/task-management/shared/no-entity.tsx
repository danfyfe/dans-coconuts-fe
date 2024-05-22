import { TaskManagementTypes } from "@/context/TaskManagementProvider";
import { NO_ENTITY } from "@/data/task-management";


const NoEntity = ({ type }: { type: TaskManagementTypes }) => {
  const { content } = NO_ENTITY[type];
  return (
    <>
      {content}
    </>
  )
};

export default NoEntity;
