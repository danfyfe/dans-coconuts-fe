import HelpTrigger from "@/components/help/help-trigger";
import OrganizationsList from "@/components/task-management/organizations-list";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts | Your Organizations",
  description: "Organization list for Task Management at Dan's Coconuts"
}

const OrganizationsListPage = ({ params }: { params: { user: string } }) => {
  const { user } = params;
  return (
    <>
      <OrganizationsList userSlug={user} />
    </>
  )
};

export default OrganizationsListPage;
