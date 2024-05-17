'use client'
import { createContext, useReducer, Dispatch } from "react";

type Organization = {
  title: string
};

type ActiveTaskManagementForm = 'organization' | 'project' | 'task' | null;

type TaskManagementProvider = {
  state: TaskManagementState;
  dispatch: Dispatch<TaskManagementAction>;
};

type TaskManagementState = {
  activeForm: ActiveTaskManagementForm;
}

type TaskManagementReducerType = 'SET_ACTIVE_FORM';

type TaskManagementReducer = {};

type TaskManagementAction = {
  type:TaskManagementReducerType;
  payload: ActiveTaskManagementForm;
};

export const TaskManagementContext = createContext<TaskManagementProvider>({
  state: { activeForm: null },
  dispatch: (action: TaskManagementAction) => {}
});

const taskManagementReducer = (state: TaskManagementState, action: TaskManagementAction) => {
  switch(action.type) {
    case 'SET_ACTIVE_FORM': {
      return {
        ...state,
        activeForm: action.payload
      }
    }
    default:
      return state;
  }
};

const initialState: TaskManagementState = {
  activeForm: null
};

export const TaskManagementProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(taskManagementReducer, initialState)


  return (
    <TaskManagementContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </TaskManagementContext.Provider>
  )
};
