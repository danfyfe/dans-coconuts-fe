'use client'
import { HELP_CATEGORIES } from "@/data/help";
import { createContext, useCallback, useReducer, useState } from "react";
import { Dispatch, SetStateAction } from "react";

export type ActiveHelpCategory = 'task-management' | null;
export type ActiveHelpCategoryContent = {
  'topic-title': string;
  'topic-titles': string[];
  'topic-content': {}
} | null

type HelpProviderReducerTypes = 'SET_HELP_CATEGORY';

interface IHelpReducerState {
  activeHelpCategory: ActiveHelpCategory;
  activeHelpContent: ActiveHelpCategoryContent;
}

interface IHelpReducerAction {
  type: HelpProviderReducerTypes;
  payload: ActiveHelpCategory;
}


interface IHelpContext {
  state: IHelpReducerState;
  dispatch: Dispatch<IHelpReducerAction>;
}

export const HelpContext = createContext<IHelpContext>({
  state: { activeHelpCategory: null, activeHelpContent: null },
  dispatch: (action: IHelpReducerAction) => {}
});

const reducer = (state: IHelpReducerState, action: IHelpReducerAction) => {
  switch(action.type) {
    case 'SET_HELP_CATEGORY': {
      const activeHelpCategory = action.payload;
      const activeHelpContent = activeHelpCategory ? HELP_CATEGORIES[activeHelpCategory] : null;
      return {
        ...state,
        activeHelpCategory,
        activeHelpContent
      }
    }
    default:
      return state
  }
};

const initialState: IHelpReducerState = {
  activeHelpCategory: null
}

export const HelpProvider = ({ children }: { children: React.ReactNode }) => {
  const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <HelpContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </HelpContext.Provider>
  )
};
