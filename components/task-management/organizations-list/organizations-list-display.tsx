'use client'
import { IOrganization } from "@/interfaces/task-management";
import OrganizationListItem from "./organization-list-item";
import NoOrganizations from "./no-organizations";
import OrganizationsListHeading from "./organizations-list-heading";
import { useContext } from "react";
import { TaskManagementContext } from "@/context/TaskManagementProvider";
import OrganizationForm from "../forms/organization-form";

const OrganizationsListDisplay = ({ organizations, userSlug } : { organizations: IOrganization[], userSlug: string }) => {
  const { state } = useContext(TaskManagementContext);
  return (
    <div className="relative overflow-auto max-h-[90%]">
      <OrganizationsListHeading />
      {
        state.activeForm === 'organization'
        ? (
          <OrganizationForm />
        ) : (
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
        )
      }
    </div>
  )
};

export default OrganizationsListDisplay;
