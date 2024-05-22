import ProjectsList from "@/components/task-management/project-list";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dan's Coconuts | Your Organization's Projects",
  description: "Project list for your Organization in Task Management at Dan's Coconuts"
}

const ProjectsListPage = ({ params }: { params: { user: string } }) => {
  const { user } = params;
  return (
    <>
      <ProjectsList userSlug={user} />
    </>
  )
};

export default ProjectsListPage;
