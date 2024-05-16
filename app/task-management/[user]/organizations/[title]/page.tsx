import Organization from "@/components/task-management/organization";
import { redirect } from "next/navigation";

const OrganizationPage = ({ params }: { params: { title: string; } }) => {
  const { title } = params;
  const orgTitle = decodeURIComponent(title);
  // get organization
  const organization = [].find((org) => org === orgTitle);
  if (!organization) {
    redirect('/')
  }

  return (
    <>
      <Organization organization={organization} />
    </>
  )
};

export default OrganizationPage;
