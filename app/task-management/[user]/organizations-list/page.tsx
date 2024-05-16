import HelpTrigger from "@/components/help/help-trigger";
import OrganizationsList from "@/components/task-manager/organizations-list";

const OrganizationsListPage = ({ params }: { params: { user: string } }) => {

  return (
    <>
      <HelpTrigger />
      <OrganizationsList />
    </>
  )
};

export default OrganizationsListPage;
