import { ReactNode } from "react"
import { CoconutProvider } from "./CoconutProvider"
import { WeatherProvider } from "./WeatherProvider"
import { MenusProvider } from "./MenusProvider"
import { SessionProvider } from "next-auth/react"
import { TaskManagementProvider } from "./TaskMangementProvider"

const Providers = ({ children }: { children: ReactNode }) => (
  <SessionProvider>
    <MenusProvider>
      <WeatherProvider>
        <CoconutProvider>
          <TaskManagementProvider>
            {children}
          </TaskManagementProvider>
        </CoconutProvider>
      </WeatherProvider>
    </MenusProvider>
  </SessionProvider>
);

export default Providers;
