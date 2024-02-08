import { LinkProps } from "next/link"

export interface IContentProps {
  children?: React.ReactNode
  className?: String
};

export interface IH1Props extends IContentProps {};

export interface IPProps extends IContentProps {};

export interface ILinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
}

export interface IErrorNotFoundProps {
  type: "error" | "not-found"
}
