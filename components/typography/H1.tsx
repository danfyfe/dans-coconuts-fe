import { IH1Props } from "@/interfaces/content";

const H1 = ({ children, className }: IH1Props) => (
  <h1
    className={`
      font-gilligan
      text-5xl
      text-center
      ${className ? className : ''}
    `}
  >
    {children}
  </h1>
);

export default H1;
