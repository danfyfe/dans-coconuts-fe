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

const Providers = async ({ children }: { children: ReactNode }) => {
  const userResp = await getUserData();
  const user = userResp.user!;
  const coconutsResp = await getCoconuts(user?.username ?? '');
  const coconuts = await coconutsResp.json();
  return (
    <ReactQueryProvider>
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
    </ReactQueryProvider>
  )
};

export default Providers;
