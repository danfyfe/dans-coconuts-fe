import { IUser } from "@/lib/models/User";
import { Dispatch } from "react";

// Be sure to update the types and actions when adding!
// Task Management Types and Actions
export const Actions = {
  ADD_USER: 'ADD_USER',
  SET_USER: 'SET_USER',
  SET_ACTIVE_RESOURCE: 'SET_ACTIVE_RESOURCE',
  ADD_ORGANIZATION: 'ADD_ORGANIZATION',
  ADD_PROJECT: 'ADD_PROJECT',
  ADD_TASK: 'ADD_TASK'
};

export type ActionTypes = 
  'ADD_USER' |
  'SET_USER' |
  'SET_ACTIVE_RESOURCE' |
  'ADD_ORGANIZATION' |
  'ADD_PROJECT' |
  'ADD_TASK';

export type ITaskManagementResources = 'organization' | 'project' | 'task';

export type ITaskManagementActions = 
{
  type: ActionTypes;
  payload: ITaskManagementResources | null
} |
{
  type: ActionTypes;
  payload: NewOrganization
} |
{
  type: ActionTypes;
  payload: NewProject;
} |
{
  type: ActionTypes;
  payload: NewTask;
};


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
  organizations: Organization[];
}