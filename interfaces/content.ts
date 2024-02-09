import { LinkProps } from "next/link"
import { ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from "react";


export interface IContentProps {
  children?: React.ReactNode
  className?: String
};

export interface IFlexProps extends IContentProps {};

export interface IH1Props extends IContentProps {};

export interface IPProps extends IContentProps {};

export interface ILinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
  asButton?: boolean | undefined
};

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  inverted?: boolean;
  children: string | React.ReactNode;
  className?: string
};

export interface IErrorNotFoundProps {
  type: "error" | "not-found"
};
