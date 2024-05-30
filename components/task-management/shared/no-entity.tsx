import { ITaskManagementResources } from "@/context/task-management/types-actions";
import { NO_ENTITY } from "@/data/task-management";


const NoEntity = ({ type }: { type: ITaskManagementResources }) => {
  const { content } = NO_ENTITY[type!];
  return (
    <>
      {content}
    </>
  )
};

export default NoEntity;
