import { Product } from "../../models/product";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartContextType = {
  cart: CartItem[];
  /*addItem: (product: Product) => void;*/
  removeItem: (product: Product) => void;
  isInCart: (product: Product) => boolean;
  toggleCartItem: (product: Product) => void;
  incrementCartItem: (product: Product) => void;
  decrementCartItem: (product: Product) => void;
};

export type CartProviderProps = {
  children: React.ReactNode;
};