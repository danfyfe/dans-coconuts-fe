
'use client'
import { IMenuWrapperProps } from "@/interfaces/navigation";

const MenuWrapper = ({ children, open, id }: IMenuWrapperProps) => (
  <div
    id={`${id}-outer`}
    className={`
      relative w-max bg-inherit flex justify-end
      ${ open ? 'opacity-100' : 'opacity-0'}
      transition-all ease-in-out z-[1000]
    `}
  >
    <div
      id={`${id}-inner`}
      className={`
        flex justify-start text-right
        absolute w-max
        ${open ? ' max-w-none' : 'max-w-0'} transition-all ease-in-out duration-100
        p-4 bg-inherit flex-col items-end bg-white bg-opacity-90 rounded shadow-sm z-[1000]
    `}>
      {children}
    </div>
  </div>
);

export default MenuWrapper;
