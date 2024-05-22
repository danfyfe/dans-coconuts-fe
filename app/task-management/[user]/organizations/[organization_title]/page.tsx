import Organization from "@/components/task-management/organization";

const OrganizationPage = ({ params }: { params: { organization_title: string; } }) => {
  const { organization_title } = params;
  const orgTitle = decodeURIComponent(organization_title);

  return (
    <>
      <Organization orgTitle={orgTitle} />
    </>
  )
};

export default OrganizationPage;
