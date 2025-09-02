import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Product interface
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image?: string;
  inStock: boolean;
}

// Product state interface
export interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
  filters: {
    category: string;
    minPrice: number;
    maxPrice: number;
    inStockOnly: boolean;
  };
  sortBy: 'name' | 'price' | 'category';
  sortOrder: 'asc' | 'desc';
}

// Initial state
const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
  filters: {
    category: '',
    minPrice: 0,
    maxPrice: 1000,
    inStockOnly: false,
  },
  sortBy: 'name',
  sortOrder: 'asc',
};

// Product slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.error = null;
    },
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateFilters: (state, action: PayloadAction<Partial<ProductState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSorting: (state, action: PayloadAction<{ sortBy: ProductState['sortBy']; sortOrder: ProductState['sortOrder'] }>) => {
      state.sortBy = action.payload.sortBy;
      state.sortOrder = action.payload.sortOrder;
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(p => p.id !== action.payload);
    },
  },
});

// Export actions
export const {
  setProducts,
  setSelectedProduct,
  setLoading,
  setError,
  updateFilters,
  setSorting,
  addProduct,
  updateProduct,
  removeProduct,
} = productSlice.actions;

// Configure store
export const productStore = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

// Export types
export type ProductRootState = ReturnType<typeof productStore.getState>;
export type ProductAppDispatch = typeof productStore.dispatch;
