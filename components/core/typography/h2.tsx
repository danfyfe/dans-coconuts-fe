import { IH1Props } from "@/interfaces/content";

const H2 = ({ children, className }: IH1Props) => (
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
