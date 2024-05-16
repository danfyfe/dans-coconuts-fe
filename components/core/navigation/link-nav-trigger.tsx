import Image from "next/image";
import { useContext } from "react";
import { MenusContext } from "@/context/MenusProvider";

const NavTrigger = () => {
  const { toggleMenu } = useContext(MenusContext);

  return (
    <div className={`w-full flex justify-end`}>
      <button
        id="nav-trigger"
        type="button"
        onClick={() => toggleMenu('link-nav')}
        className={`
          h-10 w-10
          flex justify-center items-center
          text-2xl z-50 m-3 hover:rotate-12
        `}>
          <Image
            priority
            src="/images/coconut.png"
            alt="An image of a coconut - navigation trigger"
            height={200}
            width={200}
            className=""
          />
      </button>
    </div>
  )
};

export default NavTrigger;
