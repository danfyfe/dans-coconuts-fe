import Organization from "@/components/task-management/organization";

const OrganizationPage = ({ params }: { params: { organization_title: string; user: string; } }) => {
  const { organization_title, user } = params;
  const orgTitle = decodeURIComponent(organization_title);

  return (
    <>
      <Organization orgTitle={orgTitle} userSlug={user} />
    </>
  )
};

export default OrganizationPage;
