import { IHProps } from "@/interfaces/content";

const H1 = ({ children, className }: IHProps) => (
  <h1
    className={`
      text-5xl
      text-center
      ${className ? className : ''}
    `}
  >
    {children}
  </h1>
);

export default H1;
