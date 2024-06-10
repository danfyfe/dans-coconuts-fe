export const FAKE_STORE_PRODUCT_CATEGORY_VALUES = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
];

export const FAKE_STORE_PRODUCT_FILTER_KEYS = [
  'category',
  'price'
];

export const FAKE_STORE_PRODUCT_FILTER_VALUES: IFAKE_STORE_PRODUCT_FILTER_VALUES_TYPES = {
  'category': FAKE_STORE_PRODUCT_CATEGORY_VALUES
}

export type IFAKE_STORE_PRODUCT_FILTER_VALUES_TYPES = {
  [key: string]: string[]
}

export const FAKE_STORE_PRODUCT_SORT_VALUES = [];

export type IFakeStoreFilterValueTypes = 
  "electronics" |
  "jewelery" |
  "men's clothing" |
  "women's clothing"