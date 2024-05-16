import ContentContainer from "@/components/core/containers/content-container";
import { IOrganization } from "@/interfaces/task-management";




const Organization = ({ organization }: { organization: IOrganization }) => {
  return (
    <ContentContainer className="md:w-5/6 md:py-2 md:px-4">
      org page
    </ContentContainer>
  )
};

export default Organization;
