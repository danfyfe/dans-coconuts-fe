'use client'
import { HELP_CATEGORIES } from "@/data/help";
import { createContext, useReducer, ReactNode, Dispatch, ReactElement } from "react";

export type ActiveHelpCategory = 'task-management' | null;

// type for hardcoded HELP_CATEGORIES
export type HelpCategoriesType = {
  [key in NonNullable<ActiveHelpCategory>]: ActiveHelpCategoryContent;
};

export type TopicContent = {
  [key: string]: {
    title: string;
    content: ReactElement;
  }
}

export type ActiveHelpCategoryContent = {
  'topic-title': string;
  'topic-titles': string[];
  'topic-content': TopicContent
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

const reducer = (state: IHelpReducerState, action: IHelpReducerAction): IHelpReducerState => {
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
  activeHelpCategory: null,
  activeHelpContent: null
}

export const HelpProvider = ({ children }: { children: ReactNode }) => {
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
