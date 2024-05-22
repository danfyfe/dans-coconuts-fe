import Organization from "@/components/task-management/organization";

const OrganizationPage = ({ params }: { params: { title: string; } }) => {
  const { title } = params;
  const orgTitle = decodeURIComponent(title);

  return (
    <>
      <Organization orgTitle={orgTitle} />
    </>
  )
};

export default OrganizationPage;
