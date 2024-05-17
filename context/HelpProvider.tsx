'use client'
import { createContext, useCallback, useReducer, useState } from "react";
import { Dispatch, SetStateAction } from "react";

type ActiveHelpCategory = 'task-management' | null;

enum HelpProviderReducerTypes {
  SET_HELP_CATEGORY = 'SET_HELP_CATEGORY'
}

interface IHelpContext {

}

interface IHelpReducerState {
  activeHelpCategory: ActiveHelpCategory;
}

interface IHelpReducerAction {
  type: HelpProviderReducerTypes;
  payload: ActiveHelpCategory;
}

export const HelpContext = createContext<IHelpContext>({

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

      }}
    >
      {children}
    </HelpContext.Provider>
  )
};
