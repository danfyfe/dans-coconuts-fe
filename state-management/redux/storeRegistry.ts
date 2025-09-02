import { userStore } from './stores/userStore';
import { productStore } from './stores/productStore';
import { registerStores } from './hoc/withRedux';

// Define the store registry type
export interface StoreRegistry {
  user: typeof userStore;
  product: typeof productStore;
}

// Register all stores
export const initializeStores = () => {
  registerStores({
    user: userStore,
    product: productStore,
  });
};

// Export individual stores for direct access
export { userStore, productStore };

// Export store types
export type { RootState as UserRootState, AppDispatch as UserAppDispatch } from './stores/userStore';
export type { ProductRootState, ProductAppDispatch } from './stores/productStore';
