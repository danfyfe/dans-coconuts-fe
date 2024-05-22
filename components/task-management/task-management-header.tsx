import H1 from "@/components/core/typography/H1";
import HelpTrigger from "@/components/help/help-trigger";
import BreadCrumbs from "../core/utility/bread-crumbs";

const TaskManagementHeader = () => {
  return (
    <>
      <BreadCrumbs />
      <div className="flex justify-center">
        <H1 className="!text-2xl">Task Management</H1>
        <HelpTrigger className="text-xs mb-4" category="task-management" />
      </div>
    </>
  )
};

export default TaskManagementHeader;
