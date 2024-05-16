import { IOrganization } from "@/interfaces/task-management";
import OrganizationListItem from "./organization-list-item";

const OrganizationsListDisplay = ({ organizations, userSlug } : { organizations: IOrganization[], userSlug: string }) => {
  return (
    <div className="relative overflow-auto max-h-[90%]">
      <ul>
        {
          organizations.map((organization, index) => {
            return <OrganizationListItem key={`organization-${index}`} organization={organization} userSlug={userSlug} />
          })
        }
      </ul>
    </div>
  )
};

export default OrganizationsListDisplay;
