import { FakeStoreActions, IFakeStoreActions, IFakeStoreState } from "./types-actions";

export const fakeStoreReducer = (state: IFakeStoreState, action: IFakeStoreActions) => {
  switch(action.type) {
    case FakeStoreActions.ADD_USER: {
      return {
        ...state
      }
    }
   
    default:
      return state;
  }
};
