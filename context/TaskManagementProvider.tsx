'use client'
import { User } from "@/lib/models/User";
import { createContext, useReducer, Dispatch } from "react";

type NewOrganization = {
  title: string;
  user: User;
};

type Organization = {
  title: string;
  users: User[];
};

type ActiveTaskManagementForm = 'organization' | 'project' | 'task' | null;

type TaskManagementProvider = {
  state: TaskManagementState;
  dispatch: Dispatch<TaskManagementAction>;
};

type TaskManagementState = {
  activeForm: ActiveTaskManagementForm;
  organizations: Organization[];
}

type TaskManagementReducerType = 'SET_ACTIVE_FORM' | 'ADD_ORGANIZATION';

type TaskManagementReducer = {};

type TaskManagementAction = {
  type: TaskManagementReducerType;
  payload: ActiveTaskManagementForm;
};

type OrganizationAction = {
  type: TaskManagementReducerType;
  payload: NewOrganization;
}

export const TaskManagementContext = createContext<TaskManagementProvider>({
  state: { activeForm: null, organizations: [] },
  dispatch: (action: TaskManagementAction | OrganizationAction) => {}
});

const taskManagementReducer = (state: TaskManagementState, action: TaskManagementAction) => {
  switch(action.type) {
    case 'SET_ACTIVE_FORM': {
      return {
        ...state,
        activeForm: action.payload
      }
    }
    case 'ADD_ORGANIZATION': {
      const user = { ...action.payload.user, admin: true }
      const newOrg = { title: action.payload.title, users: [user] }
      return {
        ...state,
        organizations: [...state.organizations, newOrg ]
      }
    }
    default:
      return state;
  }
};

const initialState: TaskManagementState = {
  activeForm: null,
  organizations: []
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
