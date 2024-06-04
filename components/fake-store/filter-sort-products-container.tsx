import { ReactNode } from "react";

const FilterSortProductContainer = ({ children, className }:
  { children: ReactNode; className: string; }) => {
return (
  <div className={`
    border-[1px] border-coconut_brown rounded
    p-2
    ${className ? className : ''}
  `}>
    {children}
  </div>
)
}

export default FilterSortProductContainer;
