
'use client'
import { INavProps } from "@/interfaces/navigation";

const MenuWrapper = ({ children, open }: INavProps) => {

  return (
    <div
      id="nav-link-menu-outer"
      className={`
        relative w-full bg-inherit flex justify-end
        ${ open ? 'opacity-100' : 'opacity-0'}
        transition-all ease-in-out
      `}
    >
      <div
        id="nav-link-menu-inner"
        className={`
          flex justify-start text-right
          w-auto
          ${open ? 'max-w-none' : 'max-w-0'} transition-all ease-in-out duration-100
          p-4 bg-inherit flex-col items-end bg-white bg-opacity-40 rounded shadow-sm
      `}>
        {children}
      </div>
    </div>
  )
};

export default MenuWrapper;
