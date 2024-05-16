import HelpTrigger from "@/components/help/help-trigger";
import OrganizationsList from "@/components/task-management/organizations-list";

const OrganizationsListPage = ({ params }: { params: { user: string } }) => {
  const { user } = params;
  return (
    <>
      <OrganizationsList userSlug={user} />
    </>
  )
};

export default OrganizationsListPage;
