
'use client'
import NextLink from "../utility/link";
import MenuWrapper from "../containers/menu-container";
import { useContext } from "react";
import { MenusContext } from "@/context/MenusProvider";
import { useSession } from "next-auth/react";
import P from "../typography/P";
import Button from "../utility/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IUser } from "@/lib/models/User";
import { signOut } from "@/app/api/users/methods";
import { useRouter } from "next/navigation";

const LinkNavMenu = ({ user }: { user: IUser | null }) => {
  const router = useRouter();
  const { activeMenu, setActiveMenu } = useContext(MenusContext);
  const linkNavOpen = activeMenu === 'link-nav';
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const handleLinkClick = () => {
    setActiveMenu(null);
  };

  const handleSignOut = async () => {
    // NEXT_PUBLIC_AUTH_NEXT_AUTH_URL addresses redirect issue of Netlify using wrong URI
    // await signOut({...(pathname && { callbackUrl: `${process.env.NEXT_PUBLIC_AUTH_NEXT_AUTH_URL}${pathname}` })});
    await signOut();
    handleLinkClick();
    router.refresh();
  }

  return (
    <MenuWrapper id="link-nav">
      <ul id="nav-link-menu-ul" className="text-3xl">
        <li>
          <NextLink
            href="/"
            prefetch
            onClick={handleLinkClick}
            className={`
              md:hover:underline
              transition-all delay-75 ease-in-out
              ${linkNavOpen ? 'visible' : 'invisible'}
            `}
          >
            Home
          </NextLink>
        </li>
        <li>
          <NextLink
            href="/coconuts"
            prefetch
            onClick={handleLinkClick}
            className={`
              md:hover:underline
              transition-all delay-75 ease-in-out
              ${linkNavOpen ? 'visible' : 'invisible'}
            `}
          >
            Coconuts
          </NextLink>
        </li>
        <li className="flex">
          <NextLink
            href="/task-management"
            prefetch
            onClick={handleLinkClick}
            className={`
              md:hover:underline text-lg
              transition-all delay-75 ease-in-out
              ${linkNavOpen ? 'visible' : 'invisible'}
            `}
          >
            Task Management (WIP)
          </NextLink>
        </li>
        <li>
          <NextLink
            href="/github"
            prefetch
            onClick={handleLinkClick}
            className={`
              md:hover:underline
              transition-all delay-75 ease-in-out
              ${linkNavOpen ? 'visible' : 'invisible'}
            `}
          >
            GitHub
          </NextLink>
        </li>
        <li>
          <NextLink
            href="/contact"
            prefetch
            onClick={handleLinkClick}
            className={`
              md:hover:underline
              transition-all delay-75 ease-in-out
              ${linkNavOpen ? 'visible' : 'invisible'}
            `}
          >
            Contact
          </NextLink>
        </li>
        <hr className="my-2"/>
        <li>
          {
            user ? (
              <div>
                <Button
                  asLink
                  onClick={handleSignOut}
                  className={`
                    md:hover:underline
                    transition-all delay-75 ease-in-out
                    ${linkNavOpen ? 'visible' : 'invisible'}
                  `}
                >
                  <span>Sign Out</span>
                </Button>
                {/* <div className="flex items-center justify-end">
                  <P className="text-xs">*Signed in via GitHub</P>
                  <Image 
                    src={session?.user?.image ?? ''}
                    className="h-5 w-5 rounded-full ml-1"
                    height={50}
                    width={50}
                    alt={`${session?.user?.name ?? 'Friend'}'s Profile Picture`}
                  />
                </div> */}
                 <div className="flex items-center justify-end mt-1">
                  <P className="text-xs">*Signed in as {user.username}</P>
                  {
                    user.image ? (
                      <Image 
                        src={session?.user?.image ?? ''}
                        className="h-5 w-5 rounded-full ml-1"
                        height={50}
                        width={50}
                        alt={`${session?.user?.name ?? 'Friend'}'s Profile Picture`}
                      />
                    ): null
                  }
                </div>
              </div>
            ) : (
              <NextLink
                href={`/signin?referer=${pathname}`}
                prefetch
                onClick={handleLinkClick}
                className={`
                  md:hover:underline
                  transition-all delay-75 ease-in-out
                  ${linkNavOpen ? 'visible' : 'invisible'}
                `}
              >
                Sign In
              </NextLink>
            )
          }
        </li>
      </ul>
    </MenuWrapper>
  )
};

export default LinkNavMenu;
