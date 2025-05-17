import MenuTriggers from "../menus/menus-triggers";
import Menus from "../menus/menus";
import { getUserByUsername, getUserData } from "@/app/actions/users";

const Navigation = async () => {
  const userResp = await getUserData();

  const user = userResp.success ? userResp.user! : null;
  return (
    <nav className={`
      absolute w-full top-0 md:right-0 flex flex-col justify-start items-end z-[1000]
      transition-all h-auto
    `}>
      <MenuTriggers />
      <Menus user={user} />
    </nav>
  )
};

export default Navigation;
