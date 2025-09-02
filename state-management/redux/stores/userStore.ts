import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// User state interface
export interface UserState {
  user: {
    id: string;
    username: string;
    email: string;
    avatar?: string;
  } | null;
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState['user']>) => {
      state.user = action.payload;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

// Export actions
export const { setUser, setLoading, setError, clearUser } = userSlice.actions;

// Configure store
export const userStore = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

// Export types
export type RootState = ReturnType<typeof userStore.getState>;
export type AppDispatch = typeof userStore.dispatch;
