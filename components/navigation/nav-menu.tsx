
import { NavProps } from "@/interfaces/navigation";

const NavMenu = ({ open }: NavProps) => {
  return (
    <div className={`relative w-full bg-inherit`}>
      {
        open ? (
        <div className="
          absolute w-full flex justify-end
          px-5 py-2 bg-inherit flex-col items-end
        ">
          {
            [1,2,3,4,5].map((l) => <a key={l} href="/">link</a>)
          }
        </div>
        ) : null
      }
    </div>
  )
};

export default NavMenu;
