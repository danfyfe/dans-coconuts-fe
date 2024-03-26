'use client'

import { ReactNode } from "react"
import { CoconutProvider } from "./CoconutProvider"
import { WeatherProvider } from "./WeatherProvider"

const Providers = ({ children }: { children: ReactNode }) => (
  <WeatherProvider>
    <CoconutProvider>
      {children}
    </CoconutProvider>
  </WeatherProvider>
);

export default Providers;
