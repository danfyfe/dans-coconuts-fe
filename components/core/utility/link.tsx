import { ILinkProps } from "@/interfaces/content";
import Link from "next/link";

const NextLink = ({ children, href, className }: ILinkProps) => (
  <Link
    href={href}
    className={`
      underline
      ${className ? className : ''}
    `}
  >
    {children}
  </Link>
);

export default NextLink;
