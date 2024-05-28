'use client'
import { IOrganization } from "@/interfaces/task-management";
import NoEntity from "../shared/no-entity";
import ActiveFormSelectorHeading from "../shared/active-form-selector-heading";
import { useContext } from "react";
import { TaskManagementContext } from "@/context/TaskManagementProvider";
import ProjectListItem from "./project-list-item";
import ProjectForm from "../forms/project-form";

const ProjectListDisplay = ({ userSlug } : { userSlug: string }) => {
  const { state } = useContext(TaskManagementContext);
  const organizations: IOrganization[] = state.organizations;

  return (
    <div className="relative overflow-auto max-h-[90%]">
      <ActiveFormSelectorHeading type="project" />
      {
        state.activeResource === 'project'
        ? (
          <ProjectForm />
        ) : (
          <>
            <ul className="px-1">
              {
                organizations.length > 0 ? (
                  <>
                    {
                      organizations.map((organization, index) => {
                        return <ProjectListItem key={`organization-${index}`} organization={organization} userSlug={userSlug} />
                      })
                    }
                  </>
                ) : (
                  <NoEntity type="project" />
                )
              }
            </ul>
          </>
        )
      }
    </div>
  )
};

export default ProjectListDisplay;
