'use client'
import { ILinkProps } from "@/interfaces/content";
import Link from "next/link";

const NextLink = ({ children, href, className, asButton, ariaLabel, onClick=() => {} }: ILinkProps) => (
  <Link
    title={ariaLabel ? ariaLabel : undefined}
    aria-label={ariaLabel ? ariaLabel : undefined}
    href={href}
    shallow={true}
    onClick={onClick}
    className={`
      font-roboto
      ${asButton ? `
        flex
        justify-center
        items-center
        rounded
        px-10
        border-2
        border-coconut_brown
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
