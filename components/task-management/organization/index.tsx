import ContentContainer from "@/components/core/containers/content-container";
import { IOrganization } from "@/interfaces/task-management";
import TaskManagementHeader from "../task-management-header";
import H2 from "@/components/core/typography/H2";




const Organization = ({ organization }: { organization: IOrganization }) => {
  return (
    <ContentContainer className="md:w-5/6 md:py-2 md:px-4">
      <TaskManagementHeader />
      <H2 className="!text-left text-xl">{organization.title}</H2>
    </ContentContainer>
  )
};

export default Organization;
