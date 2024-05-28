import { TaskManagementActions, ITaskManagementActions, ITaskManagementState } from "./types-actions";

export const taskManagementReducer = (state: ITaskManagementState, action: ITaskManagementActions) => {
  switch(action.type) {
    case TaskManagementActions.ADD_USER: {
      return {
        ...state
      }
    }
    case TaskManagementActions.SET_USER: {
      return {
        ...state
      }
    }
    case TaskManagementActions.SET_ACTIVE_RESOURCE: {
      return {
        ...state,
        activeResource: action.payload
      }
    }
    case TaskManagementActions.ADD_ORGANIZATION: {
      const newOrg = action.payload;
      return {
        ...state,
        organizations: [...state.organizations, newOrg ]
      }
    }
    case TaskManagementActions.ADD_PROJECT: {
      return {
        ...state
      }
    }
    case TaskManagementActions.ADD_PROJECT: {
      return {
        ...state
      }
    }
    case TaskManagementActions.ADD_TASK: {
      return {
        ...state
      }
    }
    default:
      return state;
  }
};
