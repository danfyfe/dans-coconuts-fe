import { IPProps } from "@/interfaces/content";

const P = ({ children, className }: IPProps) => (
  <p
    className={`
      font-roboto
      ${className ? className : ''}
    `}
  >{children}</p>
);

export default P;
