import { ReactNode } from "react"
import { CoconutProvider } from "./CoconutProvider"
import { WeatherProvider } from "./WeatherProvider"
import { MenusProvider } from "./MenusProvider"
import { SessionProvider } from "next-auth/react"

const Providers = ({ children }: { children: ReactNode }) => (
  <SessionProvider>
    <MenusProvider>
      <WeatherProvider>
        <CoconutProvider>
          {children}
        </CoconutProvider>
      </WeatherProvider>
    </MenusProvider>
  </SessionProvider>
);

export default Providers;
