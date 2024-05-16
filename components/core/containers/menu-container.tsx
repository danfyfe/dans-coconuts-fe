
'use client'
import { IMenuWrapperProps } from "@/interfaces/navigation";
import { useRef, useEffect, useCallback } from "react";

const MenuWrapper = ({ children, open, setOpen, id, className }: IMenuWrapperProps) => {
  //  TODO: create custom hook for this logic
  const menuWrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: any) => {
    if (open && menuWrapperRef.current && !menuWrapperRef.current.contains(event.target as Node)) {
      setOpen(null);
    }
  }, [open, setOpen]);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div
      ref={menuWrapperRef}
      id={`${id}-outer`}
      className={`
        relative w-max bg-inherit flex justify-end
        ${ open ? 'opacity-100' : 'opacity-0'}
        transition-all ease-in-out z-[1000]
        ${className ? className : ''}
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
  )
};

export default MenuWrapper;
