import P from "@/components/core/typography/P";
import { ActiveHelpCategoryContent } from "@/context/HelpProvider"

export type TaskManagementHelpTopic = 'organizations' | 'projects' | 'tasks';

export const TASK_MANAGEMENT_HELP: ActiveHelpCategoryContent = {
  'topic-title': 'Task Management',
  'topic-titles': [
    'organizations',
    'projects',
    'tasks'
  ],
  'topic-content': {
    'organizations': {
      title: 'Organizations',
      content: <>
        <div className="!text-left">
          <P>An Organization is a parent element that holds Projects and Tasks. Each user can belong to multiple Organizations and Organizations can have multiple users.</P>
          <P className="mt-2">Organization Attributes:</P>
          <ul className="my-2">
            <li className="px-2">
              <dl>
                <dt><P><b>Title</b></P></dt>
                <dd className="pl-2"><P className="pl-2">A name to identify the Organization. The title attribute is unique and cannot be used by other Organizations.</P></dd>

                <dt><P><b>Users</b></P></dt>
                <dd className="pl-2"><P className="pl-2">List of users that belong to the organization</P></dd>

                <dt><P><b>Password</b></P></dt>
                <dd className="pl-2"><P className="pl-2">Password used to allow others to join the organization.</P></dd>
              </dl>
            </li>
          </ul>
        </div>
      </>
    },
    'projects': {
      title: 'Projects',
      content: <>
        <div className="!text-left">
          <P>A Project contains Tasks, has one Organization and many Users. A Project is used to track the status of larger scopes of work.</P>
          <P className="mt-2">Project Attributes:</P>
          <ul className="my-2">
            <li className="px-2">
              <dl>
                <dt><P><b>Organization</b></P></dt>
                <dd className="pl-2"><P className="pl-2"></P></dd>

                <dt><P><b>Users</b></P></dt>
                <dd className="pl-2"><P className="pl-2"></P></dd>

                <dt><P><b>Tasks</b></P></dt>
                <dd className="pl-2"><P className="pl-2"></P></dd>

                <dt><P><b>Title</b></P></dt>
                <dd className="pl-2"><P className="pl-2"></P></dd>

                <dt><P><b>Description</b></P></dt>
                <dd className="pl-2"><P className="pl-2"></P></dd>

                <dt><P><b>Start Date</b></P></dt>
                <dd className="pl-2"><P className="pl-2"></P></dd>

                <dt><P><b>End Date</b></P></dt>
                <dd className="pl-2"><P className="pl-2"></P></dd>

                <dt><P><b>Percent Done</b></P></dt>
                <dd className="pl-2"><P className="pl-2"></P></dd>

                <dt><P><b>Completed</b></P></dt>
                <dd className="pl-2"><P className="pl-2"></P></dd>
              </dl>
            </li>
          </ul>
        </div>
      </>
    },
    'tasks': {
      title: 'Tasks',
      content: <>
        <div className="!text-left">
          <P>A Task belongs to a Project and has a User. A Task is used to track smaller individual pieces of work that contribute to Project completion.</P>
          <P className="mt-2">Task Attributes:</P>
          <ul className="my-2">
            <li className="px-2">
              <dl>
                <dt><P><b>Project</b></P></dt>
                <dd className="pl-2"><P className="pl-2"></P></dd>

                <dt><P><b>Title</b></P></dt>
                <dd className="pl-2"><P className="pl-2"></P></dd>

                <dt><P><b>Description</b></P></dt>
                <dd className="pl-2"><P className="pl-2"></P></dd>

                <dt><P><b>Due Date</b></P></dt>
                <dd className="pl-2"><P className="pl-2"></P></dd>

                <dt><P><b>Status</b></P></dt>
                <dd className="pl-2"><P className="pl-2"></P></dd>
              </dl>
            </li>
          </ul>
        </div>
      </>
    }
  }
};
