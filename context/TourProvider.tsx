'use client'
import { createContext, Dispatch, SetStateAction, useState } from "react";

export type IActiveTour = 'home' | null;

export type IActiveTourElemId = 'nav-trigger' | 'weather-widget-btn' | null;

export type IModalType = 'home';

export type IHighlight = {
  x: number;
  y: number;
  diameter: number;
} | null;

interface ITourProvider {
  activeTour: IActiveTour
  setActiveTour: Dispatch<SetStateAction<IActiveTour>>;
  highlight: IHighlight;
  setHighlight: Dispatch<SetStateAction<IHighlight>>;
  activeTourElemId: IActiveTourElemId,
  setActiveTourElemId:  Dispatch<SetStateAction<IActiveTourElemId>>
}

export const TourContext = createContext<ITourProvider>({
  activeTour: null,
  setActiveTour: () => {},
  highlight: null,
  setHighlight: () => {},
  activeTourElemId: null,
  setActiveTourElemId: () => {}
});

export const TourProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTour, setActiveTour] = useState<IActiveTour>(null);
  const [highlight, setHighlight] = useState<IHighlight>(null);
  const [activeTourElemId, setActiveTourElemId] = useState<IActiveTourElemId>(null);

  return (
    <TourContext.Provider
      value={{
        activeTour, setActiveTour,
        highlight, setHighlight,
        activeTourElemId, setActiveTourElemId
      }}>
      {children}
    </TourContext.Provider>
  )
};
