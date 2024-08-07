'use client'
import { createContext, useReducer } from "react";
import {
  ITaskManagementActions,
  ITaskManagementState,
  ITaskManagementProvider
} from "./task-management/types-actions";
import { taskManagementReducer } from "./task-management/reducer";


export const TaskManagementContext = createContext<ITaskManagementProvider>({
  state: { activeResource: null },
  dispatch: (action: ITaskManagementActions) => {}
});

const initialState: ITaskManagementState = {
  activeResource: null,
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
