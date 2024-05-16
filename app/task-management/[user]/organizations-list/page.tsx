import OrganizationsList from "@/components/task-manager/organizations-list";

const OrganizationsListPage = ({ params }: { params: { user: string } }) => {
  
  return (
    <>
      <OrganizationsList />
    </>
  )
};

export default OrganizationsListPage;
