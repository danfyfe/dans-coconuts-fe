import { ReactNode } from "react"
import { CoconutProvider } from "./CoconutProvider"
import { WeatherProvider } from "./WeatherProvider"
import { MenusProvider } from "./MenusProvider"

const Providers = ({ children }: { children: ReactNode }) => (
  <MenusProvider>
    <WeatherProvider>
      <CoconutProvider>
        {children}
      </CoconutProvider>
    </WeatherProvider>
  </MenusProvider>
);

export default Providers;
