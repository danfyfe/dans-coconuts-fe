import NextLink from "@/components/core/utility/link";
import { IOrganization } from "@/interfaces/task-management";
import slugifyString from "@/lib/slugify-string";

const OrganizationItem = ({ organization, userSlug }: { organization: IOrganization, userSlug: string }) => {
  const slugifiedTitle = slugifyString(organization.title);
  return (
    <li>
      <NextLink
        prefetch
        href={`/task-management/${userSlug}/organizations/${slugifiedTitle}`}
      >
        {organization.title}
      </NextLink>
    </li>
  )
};

export default OrganizationItem;
