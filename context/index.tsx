import { ReactNode } from "react"
import { CoconutsProvider } from "./CoconutsProvider"
import { WeatherProvider } from "./WeatherProvider"
import { MenusProvider } from "./MenusProvider"
import { SessionProvider } from "next-auth/react"
import { TaskManagementProvider } from "./TaskManagementProvider"
import { HelpProvider } from "./HelpProvider"
import { ReactQueryProvider } from "./ReactQueryProvider"
import { UserProvider } from "./UserProvider"


const Providers = ({ children }: { children: ReactNode }) => (
  <ReactQueryProvider>
    <UserProvider>
      <SessionProvider>
        <MenusProvider>
          <HelpProvider>
            <WeatherProvider>
              <CoconutsProvider>
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
);

export default Providers;
