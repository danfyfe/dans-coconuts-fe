
'use client'
import { INavProps } from "@/interfaces/navigation";
import NextLink from "../utility/link";

const NavMenu = ({ open, setOpen }: INavProps) => {
  const handleLinkClick = () => {
    setOpen(false)
  };

  return (
    <div
      className={`
        relative w-full bg-inherit h-[calc(100vh-64px)] flex
        ${ open ? 'md:border-l-2 md:border-l-black' : ''}
      `}
    >
      {
        open ? (
        <div className="
          w-full flex justify-start
          px-5 py-5 bg-inherit flex-col items-end
        ">
            <NextLink
              href="/"
              // onClick={handleLinkClick}
              className="
                md:hover:underline
                text-5xl
              "
            >
              Home
            </NextLink>
            <NextLink
              href="/coconuts"
              // onClick={handleLinkClick}
              className="
                text-5xl
                md:hover:underline
              "
            >
              Coconuts
            </NextLink>
          
        </div>
        ) : null
      }
    </div>
  )
};

export default NavMenu;
