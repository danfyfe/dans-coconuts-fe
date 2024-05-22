import { Actions, ITaskManagementActions, ITaskManagementState } from "./types-actions";

export const taskManagementReducer = (state: ITaskManagementState, action: ITaskManagementActions) => {
  switch(action.type) {
    case Actions.ADD_USER: {
      return {
        ...state
      }
    }
    case Actions.SET_USER: {
      return {
        ...state
      }
    }
    case Actions.SET_ACTIVE_RESOURCE: {
      return {
        ...state,
        activeForm: action.payload
      }
    }
    case Actions.ADD_ORGANIZATION: {
      const user = { ...action.payload.user, admin: true }
      const newOrg = { title: action.payload.title, users: [user], projects: [] }
      return {
        ...state,
        organizations: [...state.organizations, newOrg ]
      }
    }
    case Actions.ADD_PROJECT: {
      return {
        ...state
      }
    }
    case Actions.ADD_PROJECT: {
      return {
        ...state
      }
    }
    case Actions.ADD_TASK: {
      return {
        ...state
      }
    }
    default:
      return state;
  }
};
