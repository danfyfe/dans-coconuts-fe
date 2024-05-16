import Organization from "@/components/task-management/organization";
import { ORGANIZATIONS } from "@/data/task-management/orgs";
import { redirect } from "next/navigation";

const OrganizationPage = ({ params }: { params: { title: string; } }) => {
  const { title } = params;
  const orgTitle = decodeURIComponent(title);
  // get organization
  const organization = ORGANIZATIONS.find((org) => org.title === orgTitle);
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
