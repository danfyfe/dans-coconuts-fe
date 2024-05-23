'use client'
import { useParams, usePathname } from "next/navigation";
import NextLink from "./link";
import P from "../typography/P";
import { FaCaretRight } from "react-icons/fa";


// const useDecodedTaskManagementParams = (): { decoded_org_title: string | null } => {
//   const { organization_title } = useParams();
//   const decoded_org_title = organization_title ? decodeURIComponent(organization_title) : null;
//   return (
//     {
//       decoded_org_title
//     }
//   )
// };

const BreadCrumb = ({ href, param, caret }: { href: string; param: string; caret?:boolean }) => {
  const pathname = usePathname();
  const text = decodeURIComponent(param);
  const isCurrentPath = false
  return (
    <li className="
      relative flex items-center
      bg-white rounded shadow-sm
      p-2 text-ellipsis max-w-[calc(33%-10px)] md:max-w-[calc(33%-8px)]
    ">
      {
        caret ? (
          <FaCaretRight aria-label="Right arrow" className=" absolute -left-4" />
        ) : null
      }
      <span className="truncate">
        {
          isCurrentPath ? (
            <P>{text}</P>
          ) : (
            <NextLink
              href={href ?? ''}
              className="hover:underline"
            >
              {text}
            </NextLink>
          )
        }
      </span>
    </li>
  )
};

type TaskManagementParams = { organization_title: string; project_title: string; task_title: string; }

const BreadCrumbs = () => {
  const params = useParams();
  const { organization_title, project_title, task_title } = params as TaskManagementParams;

  return (
    <> 
      {
        organization_title ? (
          <div className="relative w-full">
            <ul className="absolute w-full -top-[4.25rem] md:-top-[3.5rem] flex gap-4">
              {
                organization_title ? (
                  <BreadCrumb param={organization_title} href="/" />
                ) : null
              }
              {
                project_title ? (
                  <BreadCrumb param={project_title} href="/" caret />
                ) : null
              }
              {
                task_title ? (
                  <BreadCrumb param={task_title} href="/" caret />
                ) : null
              }
            </ul>
          </div>
        ) : null
      }
    </>
  )
};

export default BreadCrumbs;
