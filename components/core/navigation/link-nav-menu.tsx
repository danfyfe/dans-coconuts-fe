
'use client'
import NextLink from "../utility/link";
import MenuWrapper from "../containers/menu-container";
import { useContext } from "react";
import { MenusContext } from "@/context/MenusProvider";
import { signOut, useSession } from "next-auth/react";
import P from "../typography/P";
import Button from "../utility/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

const LinkNavMenu = () => {
  const { linkNavOpen, setLinkNavOpen } = useContext(MenusContext);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  const handleLinkClick = () => {
    setLinkNavOpen(false);
  };

  const handleSignOut = async () => {
    // NEXT_PUBLIC_AUTH_NEXT_AUTH_URL addresses redirect issue of Netlify using wrong URI
    await signOut({...(pathname && { callbackUrl: `${process.env.NEXT_PUBLIC_AUTH_NEXT_AUTH_URL}${pathname}` })});
    handleLinkClick();
  }

  return (
    <MenuWrapper open={linkNavOpen} setOpen={setLinkNavOpen} id="nav-link-menu">
      <ul id="nav-link-menu-ul">
        <li>
          <NextLink
            href="/"
            prefetch
            onClick={handleLinkClick}
            className={`
              md:hover:underline
              text-4xl
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
              text-4xl
              transition-all delay-75 ease-in-out
              ${linkNavOpen ? 'visible' : 'invisible'}
            `}
          >
            Coconuts
          </NextLink>
        </li>
        <li>
          <NextLink
            href="/github"
            prefetch
            onClick={handleLinkClick}
            className={`
              md:hover:underline
              text-4xl
              transition-all delay-75 ease-in-out
              ${linkNavOpen ? 'visible' : 'invisible'}
            `}
          >
            GitHub
          </NextLink>
        </li>
        <li>
          {
            status === 'authenticated' ? (
              <div>
                <Button
                  asLink
                  onClick={handleSignOut}
                  className={`
                    md:hover:underline
                    text-4xl
                    transition-all delay-75 ease-in-out
                    
                    ${linkNavOpen ? 'visible' : 'invisible'}
                  `}
                >
                  <span>Sign Out</span>
                </Button>
                <div className="flex items-center justify-end">
                  <P className="text-xs">*Signed in via GitHub</P>
                  <Image 
                    src={session?.user?.image ?? ''}
                    className="h-5 w-5 rounded-full ml-1"
                    height={50}
                    width={50}
                    alt={`${session?.user?.name ?? 'Friend'}'s Profile Picture`}
                  />
                </div>
              </div>
            ) : (
              <NextLink
                href={`/signin?referer=${pathname}`}
                prefetch
                onClick={handleLinkClick}
                className={`
                  md:hover:underline
                  text-4xl
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
