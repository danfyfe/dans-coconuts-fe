'use client'
import { HELP_CATEGORIES } from "@/data/help";
import { createContext, useReducer, ReactNode, Dispatch, ReactElement } from "react";

export type ActiveHelpCategory = 'task-management' | 'coconuts' | 'fake-store' | null;

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

type HelpProviderReducerType = 'SET_HELP_CATEGORY';

type HelpReducerState = {
  activeHelpCategory: ActiveHelpCategory;
  activeHelpContent: ActiveHelpCategoryContent;
}

type HelpReducerAction = {
  type: HelpProviderReducerType;
  payload: ActiveHelpCategory;
}

type HelpContext = {
  state: HelpReducerState;
  dispatch: Dispatch<HelpReducerAction>;
}

export const HelpContext = createContext<HelpContext>({
  state: { activeHelpCategory: null, activeHelpContent: null },
  dispatch: (action: HelpReducerAction) => {}
});

const helpReducer = (state: HelpReducerState, action: HelpReducerAction): HelpReducerState => {
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

const initialState: HelpReducerState = {
  activeHelpCategory: null,
  activeHelpContent: null
}

export const HelpProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(helpReducer, initialState);

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
