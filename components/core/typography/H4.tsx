import { IHProps } from "@/interfaces/content";

const H4 = ({ children, className }: IHProps) => (
  <h4
    className={`
      font-roboto
      text-xl
      ${className ? className : ''}
    `}
  >
    {children}
  </h4>
);

export default H4;
