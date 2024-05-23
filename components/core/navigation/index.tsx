import MenuTriggers from "../../menus/menus-triggers";
import Menus from "../../menus/menus";

const Navigation = () => {
  // const pathname = usePathname();

  return (
    <nav className={`
      absolute w-full top-0 md:right-0 flex flex-col justify-start items-end z-[1000]
      transition-all h-auto
    `}>
      <MenuTriggers />
      <Menus />
    </nav>
  )
};

export default Navigation;
