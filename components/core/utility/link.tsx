import { ILinkProps } from "@/interfaces/content";
import Link from "next/link";

const NextLink = ({ children, href, className, asButton, ariaLabel }: ILinkProps) => (
  <Link
    title={ariaLabel ? ariaLabel : undefined}
    aria-label={ariaLabel ? ariaLabel : undefined}
    href={href}
    className={`
      underline
      font-roboto
      ${asButton ? `
        flex
        justify-center
        items-center
        rounded
        px-10
        border-2
        border-black
        min-w-[4rem]
        min-h-[3rem]
        !no-underline
      ` : ''}
      ${className ? className : ''}
    `}
  >
    {children}
  </Link>
);

export default NextLink;
