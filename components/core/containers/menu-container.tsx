
'use client'
import { MenusContext } from "@/context/MenusProvider";
import { IMenuWrapperProps } from "@/interfaces/navigation";
import { useRef, useEffect, useCallback, useContext } from "react";

const MenuWrapper = ({ children, id, className }: IMenuWrapperProps) => {
  const { activeMenu, toggleMenu } = useContext(MenusContext);
  const menuActive = activeMenu === id;
  //  TODO: create custom hook for this logic
  const menuWrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: any) => {
    if (menuActive && menuWrapperRef.current && !menuWrapperRef.current.contains(event.target as Node)) {
      toggleMenu(id);
    }
  }, [menuActive, toggleMenu, id]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      ref={menuWrapperRef}
      id={`${id}-menu-outer`}
      className={`
        absolute w-max bg-inherit flex justify-end top-16 md:top-20
        ${ menuActive ? 'opacity-100 visible' : 'opacity-0 invisible'}
        transition-all ease-in-out z-[1000] duration-75
        ${className ? className : ''}
      `}
    >
      <div
        id={`${id}-menu-inner`}
        className={`
          flex justify-start text-right
          w-full
          p-4 bg-inherit flex-col items-end bg-white rounded shadow-sm z-[1000]
      `}>
        {children}
      </div>
    </div>
  )
};

export default MenuWrapper;
