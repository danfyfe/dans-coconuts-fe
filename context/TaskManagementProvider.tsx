'use client'
import { IUser } from "@/lib/models/User";
import { createContext, useReducer, Dispatch } from "react";

type NewOrganization = {
  title: string;
  user?: IUser;
};

type Project = {
  title: string;
}

type Organization = {
  title: string;
  users: IUser[];
  projects: Project[]
};

type Action = 
{
  type: 'SET_ACTIVE_FORM';
  payload: ActiveTaskManagementForm
} |
{
  type: 'ADD_ORGANIZATION';
  payload: NewOrganization
}

export type ActiveTaskManagementForm = 'organization' | 'project' | 'task' | null;

export type TaskManagementTypes = 'organization' | 'project' | 'task';

type TaskManagementProvider = {
  state: TaskManagementState;
  dispatch: Dispatch<Action>;
};

type TaskManagementState = {
  activeForm: ActiveTaskManagementForm;
  organizations: Organization[];
}

export const TaskManagementContext = createContext<TaskManagementProvider>({
  state: { activeForm: null, organizations: [] },
  dispatch: (action: Action) => {}
});

const taskManagementReducer = (state: TaskManagementState, action: Action) => {
  switch(action.type) {
    case 'SET_ACTIVE_FORM': {
      return {
        ...state,
        activeForm: action.payload
      }
    }
    case 'ADD_ORGANIZATION': {
      const user = { ...action.payload.user, admin: true }
      const newOrg = { title: action.payload.title, users: [user], projects: [] }
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
