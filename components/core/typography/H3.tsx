import { IHProps } from "@/interfaces/content";

const H3 = ({ children, className }: IHProps) => (
  <h3
    className={`
      font-roboto
      text-2xl
      ${className ? className : ''}
    `}
  >
    {children}
  </h3>
);

export default H3;
