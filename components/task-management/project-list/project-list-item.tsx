import NextLink from "@/components/core/utility/link";
import { IProject } from "@/interfaces/task-management";
import encodeString from "@/lib/encodeString";

const ProjectListItem = ({ project, userSlug }: { project: IProject, userSlug: string }) => {
  const encodedTitle = encodeString(project.title);
  return (
    <li>
      <NextLink
        className="text-xl hover:underline"
        prefetch
        href={`/task-management/${userSlug}/organizations/${encodedTitle}`}
      >
        {project.title}
      </NextLink>
    </li>
  )
};

export default ProjectListItem;
