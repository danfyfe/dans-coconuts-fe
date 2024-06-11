import { ReactNode } from "react"
import { CoconutsProvider } from "./CoconutsProvider"
import { WeatherProvider } from "./WeatherProvider"
import { MenusProvider } from "./MenusProvider"
import { SessionProvider } from "next-auth/react"
import { TaskManagementProvider } from "./TaskManagementProvider"
import { HelpProvider } from "./HelpProvider"
import { ReactQueryProvider } from "./ReactQueryProvider"
import { UserProvider } from "./UserProvider"
import { getCoconuts } from "@/app/actions/coconuts"
import { getUserData } from '@/app/actions/users';
import { ModalProvider } from "./ModalProvider"

const Providers = async ({ children }: { children: ReactNode }) => {
  const userResp = await getUserData();
  const user = userResp.user!;
  const coconutsResp = await getCoconuts(user?.username ?? '');
  const coconuts = await coconutsResp.json();
  // console.log('     loading?        ', user)
  return (
    <ReactQueryProvider>
      <ModalProvider>
        <UserProvider userData={user}>
          <SessionProvider>
            <MenusProvider>
              <HelpProvider>
                <WeatherProvider>
                  <CoconutsProvider coconutsData={coconuts.success ? coconuts.coconuts : []}>
                    <TaskManagementProvider>
                      {children}
                    </TaskManagementProvider>
                  </CoconutsProvider>
                </WeatherProvider>
              </HelpProvider>
            </MenusProvider>
          </SessionProvider>
        </UserProvider>
      </ModalProvider>
    </ReactQueryProvider>
  )
};

export default Providers;
