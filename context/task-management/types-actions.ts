import { IUser } from "@/models/User";
import { Dispatch } from "react";

// Be sure to update the types and actions when adding!
// Task Management Types and Actions
export const TaskManagementActions = {
  ADD_USER: 'ADD_USER' as const,
  SET_USER: 'SET_USER' as const,
  SET_ACTIVE_RESOURCE: 'SET_ACTIVE_RESOURCE' as const,
  ADD_ORGANIZATION: 'ADD_ORGANIZATION' as const,
  ADD_PROJECT: 'ADD_PROJECT' as const,
  ADD_TASK: 'ADD_TASK' as const,
};

export type TaskManagementActionTypes =
  | typeof TaskManagementActions.ADD_USER
  | typeof TaskManagementActions.SET_USER
  | typeof TaskManagementActions.SET_ACTIVE_RESOURCE
  | typeof TaskManagementActions.ADD_ORGANIZATION
  | typeof TaskManagementActions.ADD_PROJECT
  | typeof TaskManagementActions.ADD_TASK;

export type TaskManagementPayloads =
  | ITaskManagementResources
  | NewOrganization
  | NewProject
  | NewTask
  | IUser;

export type ITaskManagementResources = 'organization' | 'project' | 'task' | null;

export type ITaskManagementActions =
  | { type: typeof TaskManagementActions.ADD_USER; payload: IUser }
  | { type: typeof TaskManagementActions.SET_USER; payload: IUser }
  | { type: typeof TaskManagementActions.SET_ACTIVE_RESOURCE; payload: ITaskManagementResources }
  | { type: typeof TaskManagementActions.ADD_ORGANIZATION; payload: NewOrganization }
  | { type: typeof TaskManagementActions.ADD_PROJECT; payload: NewProject }
  | { type: typeof TaskManagementActions.ADD_TASK; payload: NewTask };

export type NewOrganization = {
  title: string;
  user?: IUser;
};

export type NewProject = {
  title: string;
  user?: IUser;
};

export type NewTask = {
  title: string;
  user?: IUser
};

export type Project = {
  title: string;
};

export type Organization = {
  title: string;
  users: IUser[];
  projects: Project[]
};


// useReducer
export type ITaskManagementProvider = {
  state: ITaskManagementState;
  dispatch: Dispatch<ITaskManagementActions>;
};

export type ITaskManagementState = {
  activeResource: ITaskManagementResources;
}