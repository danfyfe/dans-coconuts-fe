export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  image: string;
  rating: ProductRating
};

export type ProductCategory = 'electronics' | 'jewelery' | "men's clothing" | "women's clothing";

export type ProductRating = {
  rate: number;
  count: number
}