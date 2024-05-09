import { IHProps } from "@/interfaces/content";

const H2 = ({ children, className }: IHProps) => (
  <h2
    className={`
      font-roboto
      text-3xl
      text-center
      ${className ? className : ''}
    `}
  >
    {children}
  </h2>
);

export default H2;
