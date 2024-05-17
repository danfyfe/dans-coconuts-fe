'use client'
import { createContext, useCallback, useReducer, useState } from "react";
import { Dispatch, SetStateAction } from "react";

export type ActiveHelpCategory = 'task-management' | null;

type HelpProviderReducerTypes = 'SET_HELP_CATEGORY';

interface IHelpReducerState {
  activeHelpCategory: ActiveHelpCategory;
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
  state: { activeHelpCategory: null },
  dispatch: (action: IHelpReducerAction) => {}
});

const reducer = (state: IHelpReducerState, action: IHelpReducerAction) => {
  switch(action.type) {
    case 'SET_HELP_CATEGORY': {
      return {
        ...state,
        activeHelpCategory: action.payload
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
