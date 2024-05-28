import TaskManager from "@/components/task-management";
import { getUserData } from "../actions/users";

const TaskManagerPage = async () => {
  const userResp = await getUserData();
  const user = userResp.success ? userResp.user! : null;
  return (
    <>
      <TaskManager user={user} />
    </>
  )
};

export default TaskManagerPage;
