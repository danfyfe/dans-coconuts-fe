import { IUser } from "@/models/User";
import { LinkProps } from "next/link"
import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";


export interface IContentProps {
  children?: React.ReactNode
  className?: string
};

export interface IFlexProps extends IContentProps {};

export interface IHProps extends IContentProps {};

export interface IPProps extends IContentProps {};

export interface ILinkProps extends LinkProps {
  children: React.ReactNode
  className?: string
  asButton?: boolean | undefined,
  ariaLabel?: string
};

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export interface ITextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export interface ISearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  indexName: 'dans-coconuts.Users';
  handleSelection: (user: Partial<IUser>) => void;
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  inverted?: boolean;
  children: string | React.ReactNode;
  className?: string;
  asLink?: boolean;
  ariaLabel?: string
};

export interface IButtonIconProps extends IButtonProps {
  icon?: string;
  ariaLabel: string;
}

export interface IErrorNotFoundProps {
  type: "error" | "not-found"
};


export interface IPostSlugProps {
  params: {
    slug: string
  }
};
