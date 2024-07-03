'use client'
import { createContext, Dispatch, SetStateAction, useState } from "react";

export type IActiveTour = 'home' | 'coconuts' | null;

export type IActiveTourType = { type: IActiveTour };

export type IActiveTourElemId =
  'nav-trigger' | 'weather-widget-btn' | 
  'add-coconut-btn'
  | null;

export type IModalType = 'home' | 'coconuts';

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
    copyElems: ICopyElem[];
    nextElemId: IActiveTourElemId;
    prevElemId: IActiveTourElemId;
  } | {
    title: string;
    copyElems: ICopyElem[];
    nextElemId: IActiveTourElemId;
    prevElemId: IActiveTourElemId;
  })[];
} | { type: null };

export type ICopyElem = JSX.Element;

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
  activeTourData: { type: null },
  setActiveTourData: () => {}
});

export const TourProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTour, setActiveTour] = useState<IActiveTour>(null);
  const [highlight, setHighlight] = useState<IHighlight>(null);
  const [activeTourElemId, setActiveTourElemId] = useState<IActiveTourElemId>(null);
  const [activeTourData, setActiveTourData] = useState<IActiveTourData>({ type: null });


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
