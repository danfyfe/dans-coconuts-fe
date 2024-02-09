import { IFlexProps } from "@/interfaces/content";

const FlexContainer = ({ children, className }: IFlexProps) => (
  <div
    className={`
      flex flex-col justify-center items-center
      w-full h-full
      ${className ? className : ''}
    `}
  >
    {children}
  </div>
);

export default FlexContainer;
