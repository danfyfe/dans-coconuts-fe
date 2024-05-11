
'use client'
import { IMenuWrapperProps } from "@/interfaces/navigation";

const MenuWrapper = ({ children, open, id }: IMenuWrapperProps) => (
  <div
    id={`${id}-outer`}
    className={`
      relative w-full h-content bg-inherit flex justify-end
      ${ open ? 'opacity-100 max-w-none min-w-1/4' : 'opacity-0 max-w-0'}
      transition-all ease-in-out z-[1000] duration-100
    `}
  >
    <div
      id={`${id}-inner`}
      className={`
        flex justify-start text-right
        absolute w-auto
        p-4 bg-inherit flex-col items-end bg-white bg-opacity-90 rounded shadow-sm z-[1000]
    `}>
      {children}
    </div>
  </div>
);

export default MenuWrapper;
