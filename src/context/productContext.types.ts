import { Product } from "../models/product";

export type ProductContextType = {
  products: Product[];
  /*addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;*/
  isInProductsList: (product: Product) => boolean;
  toggleProduct: (product: Product) => void;
};

export type ProductProviderProps = {
  children: React.ReactNode;
};