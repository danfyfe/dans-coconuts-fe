import NextLink from "@/components/core/utility/link";
import { IOrganization } from "@/interfaces/task-management";
import encodeString from "@/lib/encodeString";

const OrganizationItem = ({ organization, userSlug }: { organization: IOrganization, userSlug: string }) => {
  const encodedTitle = encodeString(organization.title);
  return (
    <li>
      <NextLink
        prefetch
        href={`/task-management/${userSlug}/organizations/${encodedTitle}`}
      >
        {organization.title}
      </NextLink>
    </li>
  )
};

export default OrganizationItem;