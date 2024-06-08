'use client'
import { createContext, useReducer } from "react";
import {
  IFakeStoreActions,
  IFakeStoreState,
  IFakeStoreProvider
} from "./fake-store/types-actions";
import { fakeStoreReducer } from "./fake-store/reducer";


export const FakeStore = createContext<IFakeStoreProvider>({
  state: { activeFilter: null, activeSort: null },
  dispatch: (action: IFakeStoreActions) => {}
});

const initialState: IFakeStoreState = {
  activeFilter: null,
  activeSort: null
};

export const FakeStoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(fakeStoreReducer, initialState)

  return (
    <FakeStore.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </FakeStore.Provider>
  )
};
