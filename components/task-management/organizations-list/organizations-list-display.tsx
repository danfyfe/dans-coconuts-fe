import { IOrganization } from "@/interfaces/task-management";
import OrganizationListItem from "./organization-list-item";
import NoOrganizations from "./no-organizations";
import OrganizationsListHeading from "./organizations-list-heading";

const OrganizationsListDisplay = ({ organizations, userSlug } : { organizations: IOrganization[], userSlug: string }) => {
  return (
    <div className="relative overflow-auto max-h-[90%]">
      <OrganizationsListHeading />
      <ul>
        {
          organizations.length > 0 ? (
            <>
              {
                organizations.map((organization, index) => {
                  return <OrganizationListItem key={`organization-${index}`} organization={organization} userSlug={userSlug} />
                })
              }
            </>
          ) : (
            <NoOrganizations />
          )
        }
      </ul>
    </div>
  )
};

export default OrganizationsListDisplay;
