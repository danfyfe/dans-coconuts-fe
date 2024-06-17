'use client'
import ActiveTourData from "@/data/tours";
import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

export type IActiveTour = 'home' | null;

export type IActiveTourElemId = 'nav-trigger' | 'weather-widget-btn' | null;

export type IModalType = 'home';

export type IHighlight = {
  x: number;
  y: number;
  diameter: number;
} | null;

export type IActiveTourData = {
  type: string;
  main: {
    title: string;
    copyElems: JSX.Element[];
  };
  steps: ({
    title: string;
    copyElems: JSX.Element[];
    nextElemId: string;
  } | {
    title: string;
    copyElems: JSX.Element[];
    nextElemId: null;
  })[];
} | {}

interface ITourProvider {
  activeTour: IActiveTour
  setActiveTour: Dispatch<SetStateAction<IActiveTour>>;
  highlight: IHighlight;
  setHighlight: Dispatch<SetStateAction<IHighlight>>;
  activeTourElemId: IActiveTourElemId;
  setActiveTourElemId:  Dispatch<SetStateAction<IActiveTourElemId>>;
  activeTourData: IActiveTourData;
  setActiveTourData:  Dispatch<SetStateAction<IActiveTourData>>;
}

export const TourContext = createContext<ITourProvider>({
  activeTour: null,
  setActiveTour: () => {},
  highlight: null,
  setHighlight: () => {},
  activeTourElemId: null,
  setActiveTourElemId: () => {},
  activeTourData: {},
  setActiveTourData: () => {}
});

export const TourProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTour, setActiveTour] = useState<IActiveTour>(null);
  const [highlight, setHighlight] = useState<IHighlight>(null);
  const [activeTourElemId, setActiveTourElemId] = useState<IActiveTourElemId>(null);
  const [activeTourData, setActiveTourData] = useState<IActiveTourData>({});


  return (
    <TourContext.Provider
      value={{
        activeTour, setActiveTour,
        highlight, setHighlight,
        activeTourElemId, setActiveTourElemId,
        activeTourData, setActiveTourData
      }}>
      {children}
    </TourContext.Provider>
  )
};
