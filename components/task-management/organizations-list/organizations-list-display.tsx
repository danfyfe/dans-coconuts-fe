'use client'
import { IOrganization } from "@/interfaces/task-management";
import OrganizationListItem from "./organization-list-item";
import NoOrganizations from "./no-organizations";
import OrganizationsListHeading from "./organizations-list-heading";
import { useContext } from "react";
import { TaskManagementContext } from "@/context/TaskManagementProvider";
import OrganizationForm from "../forms/organization-form";

const OrganizationsListDisplay = ({ userSlug } : { userSlug: string }) => {
  const { state } = useContext(TaskManagementContext);
  const organizations: IOrganization[] = state.organizations;
  console.log(organizations)
  return (
    <div className="relative overflow-auto max-h-[90%]">
      <OrganizationsListHeading />
      {
        state.activeForm === 'organization'
        ? (
          <OrganizationForm />
        ) : (
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
