import React, { ComponentType } from 'react';
import { Store } from '@reduxjs/toolkit';
import { connect, ConnectedProps } from 'react-redux';

// Generic type for store registry
type StoreRegistry = Record<string, Store>;

// Global store registry - this would be populated by your store configuration
declare global {
  interface Window {
    __REDUX_STORES__?: StoreRegistry;
  }
}

// Type for the HOC function
type WithReduxHOC = <TStoreName extends keyof StoreRegistry>(
  storeName: TStoreName
) => <TComponentProps extends object>(
  Component: ComponentType<TComponentProps>
) => ComponentType<TComponentProps & ConnectedProps<typeof connect>>;

// Type for store selector function
type StoreSelector<TStoreName extends keyof StoreRegistry> = (
  state: StoreRegistry[TStoreName] extends Store<infer TState> ? TState : never
) => any;

// Type for action creators
type ActionCreators = Record<string, (...args: any[]) => any>;

/**
 * Higher Order Component that connects a component to a specific Redux store
 * @param storeName - The name of the store to connect to
 * @returns A HOC function that can wrap components
 * 
 * @example
 * ```tsx
 * // Define your store
 * const userStore = configureStore({
 *   reducer: userReducer,
 *   // ... other config
 * });
 * 
 * // Register the store
 * window.__REDUX_STORES__ = {
 *   user: userStore,
 *   // ... other stores
 * };
 * 
 * // Use the HOC
 * const ConnectedUserComponent = withRedux('user')(
 *   mapStateToProps,
 *   mapDispatchToProps
 * )(UserComponent);
 * ```
 */
export const withRedux: WithReduxHOC = <TStoreName extends keyof StoreRegistry>(
  storeName: TStoreName
) => {
  return <TComponentProps extends object>(
    Component: ComponentType<TComponentProps>
  ) => {
    // Get the store from the registry
    const store = window.__REDUX_STORES__?.[storeName];
    
    if (!store) {
      throw new Error(`Store "${String(storeName)}" not found in registry. Make sure the store is registered in window.__REDUX_STORES__`);
    }

    // Create a connected component
    const ConnectedComponent = connect(
      // mapStateToProps - will be provided by the user
      undefined,
      // mapDispatchToProps - will be provided by the user
      undefined,
      // mergeProps - will be provided by the user
      undefined,
      // options
      {
        context: React.createContext(store)
      }
    )(Component);

    // Set display name for debugging
    ConnectedComponent.displayName = `withRedux(${String(storeName)})(${Component.displayName || Component.name})`;

    return ConnectedComponent as ComponentType<TComponentProps & ConnectedProps<typeof connect>>;
  };
};

/**
 * Alternative HOC that provides more flexibility with explicit mapStateToProps and mapDispatchToProps
 * @param storeName - The name of the store to connect to
 * @param mapStateToProps - Function to map state to props
 * @param mapDispatchToProps - Function to map dispatch to props
 * @returns A HOC function that can wrap components
 * 
 * @example
 * ```tsx
 * const mapStateToProps = (state: UserState) => ({
 *   user: state.user,
 *   isLoading: state.loading
 * });
 * 
 * const mapDispatchToProps = {
 *   fetchUser: fetchUserAction,
 *   updateUser: updateUserAction
 * };
 * 
 * const ConnectedUserComponent = withReduxStore('user', mapStateToProps, mapDispatchToProps)(UserComponent);
 * ```
 */
export const withReduxStore = <
  TStoreName extends keyof StoreRegistry,
  TStateProps = {},
  TDispatchProps = {},
  TOwnProps = {},
  TMergedProps = {}
>(
  storeName: TStoreName,
  mapStateToProps?: StoreSelector<TStoreName>,
  mapDispatchToProps?: ActionCreators | ((dispatch: any) => TDispatchProps)
) => {
  return <TComponentProps extends object>(
    Component: ComponentType<TComponentProps>
  ) => {
    // Get the store from the registry
    const store = window.__REDUX_STORES__?.[storeName];
    
    if (!store) {
      throw new Error(`Store "${String(storeName)}" not found in registry. Make sure the store is registered in window.__REDUX_STORES__`);
    }

    // Create a connected component with the provided mappings
    const ConnectedComponent = connect(
      mapStateToProps,
      mapDispatchToProps,
      undefined,
      {
        context: React.createContext(store)
      }
    )(Component);

    // Set display name for debugging
    ConnectedComponent.displayName = `withReduxStore(${String(storeName)})(${Component.displayName || Component.name})`;

    return ConnectedComponent as ComponentType<TComponentProps & TStateProps & TDispatchProps>;
  };
};

/**
 * Hook to get a specific store from the registry
 * @param storeName - The name of the store to retrieve
 * @returns The Redux store instance
 * 
 * @example
 * ```tsx
 * const MyComponent = () => {
 *   const userStore = useReduxStore('user');
 *   const dispatch = useDispatch();
 *   const userState = useSelector((state: UserState) => state.user);
 *   
 *   // Use the store...
 * };
 * ```
 */
export const useReduxStore = <TStoreName extends keyof StoreRegistry>(
  storeName: TStoreName
): StoreRegistry[TStoreName] => {
  const store = window.__REDUX_STORES__?.[storeName];
  
  if (!store) {
    throw new Error(`Store "${String(storeName)}" not found in registry. Make sure the store is registered in window.__REDUX_STORES__`);
  }
  
  return store;
};

/**
 * Utility function to register stores in the global registry
 * @param stores - Object containing store name to store instance mappings
 * 
 * @example
 * ```tsx
 * registerStores({
 *   user: userStore,
 *   products: productStore,
 *   cart: cartStore
 * });
 * ```
 */
export const registerStores = (stores: StoreRegistry): void => {
  if (typeof window !== 'undefined') {
    window.__REDUX_STORES__ = {
      ...window.__REDUX_STORES__,
      ...stores
    };
  }
};

export default withRedux;