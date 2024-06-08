import { FakeStoreActions, IFakeStoreActions, IFakeStoreState } from "./types-actions";

export const fakeStoreReducer = (state: IFakeStoreState, action: IFakeStoreActions) => {
  switch(action.type) {
    case FakeStoreActions.SET_FILTER: {
      return {
        ...state
      }
    }
    case FakeStoreActions.SET_SORT: {
      return {
        ...state
      }
    }
   
    default:
      return state;
  }
};
