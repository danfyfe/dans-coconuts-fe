import { IUser } from "@/models/User";
import { Dispatch } from "react";

// Be sure to update the types and actions when adding!
// FAKE STORE Types and Actions
export const FakeStoreActions = {
  SET_FILTER: 'SET_FILTER' as const,
  SET_SORT: 'SET_SORT' as const,
};

export type FakeStoreActionTypes =
  | typeof FakeStoreActions.SET_FILTER
  | typeof FakeStoreActions.SET_SORT


export type FakeStorePayloads =
  | IFakeStoreResources
  | IUser;

export type IFakeStoreResources = 'organization' | 'project' | 'task' | null;

export type IFakeStoreActions =
  | { type: typeof FakeStoreActions.SET_FILTER; payload: IUser }
  | { type: typeof FakeStoreActions.SET_SORT; payload: IUser }


// useReducer
export type IFakeStoreProvider = {
  state: IFakeStoreState;
  dispatch: Dispatch<IFakeStoreActions>;
};

export type IFakeStoreState = {
  activeResource: IFakeStoreResources;
}