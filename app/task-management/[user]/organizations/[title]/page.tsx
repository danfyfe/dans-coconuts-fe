import Organization from "@/components/task-management/organization";

const OrganizationPage = ({ params }: { params: { title: string; } }) => {
  const { title } = params;
  // get organization

  return (
    <>
      <Organization organization={{}} />
    </>
  )
};

export default OrganizationPage;
