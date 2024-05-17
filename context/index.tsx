import { ReactNode } from "react"
import { CoconutProvider } from "./CoconutProvider"
import { WeatherProvider } from "./WeatherProvider"
import { MenusProvider } from "./MenusProvider"
import { SessionProvider } from "next-auth/react"
import { TaskManagementProvider } from "./TaskManagementProvider"
import { HelpProvider } from "./HelpProvider"

const Providers = ({ children }: { children: ReactNode }) => (
  <SessionProvider>
    <MenusProvider>
      <HelpProvider>
        <WeatherProvider>
          <CoconutProvider>
            <TaskManagementProvider>
              {children}
            </TaskManagementProvider>
          </CoconutProvider>
        </WeatherProvider>
      </HelpProvider>
    </MenusProvider>
  </SessionProvider>
);

export default Providers;
