'use client'
import { IOrganization } from "@/interfaces/task-management";
import OrganizationListItem from "./organization-list-item";
import NoOrganizations from "../shared/no-entity";
import ActiveFormSelectorHeading from "../shared/active-form-selector-heading";
import { useContext } from "react";
import { TaskManagementContext } from "@/context/TaskManagementProvider";
import OrganizationForm from "../forms/organization-form";
import { IUser } from "@/models/User";

const OrganizationsListDisplay = ({ userSlug, user } : { userSlug: string, user: IUser | null }) => {
  const { state } = useContext(TaskManagementContext);
  const organizations: IOrganization[] = user?.organizations ?? [];

  return (
    <div className="relative overflow-auto max-h-[90%]">
      <ActiveFormSelectorHeading type="organization" />
      {
        state.activeResource === 'organization'
        ? (
          <OrganizationForm user={user} />
        ) : (
          <>
            <ul className="px-1">
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
                  <NoOrganizations type="organization" />
                )
              }
            </ul>
          </>
        )
      }
    </div>
  )
};

export default OrganizationsListDisplay;
