import { Product } from "../../models/product";

export type CartItem = {
  product: Product;
  quantity: number;
};

export type CartContextType = {
  cart: CartItem[];
  addCartItem: (product: Product) => void;
  removeCartItem: (product: Product) => void;
  isInCart: (product: Product) => boolean;
  toggleCartItem: (product: Product) => void;
  incrementCartItem: (product: Product) => void;
  decrementCartItem: (product: Product) => void;
  clearCart: () => void;
};

export type CartProviderProps = {
  children: React.ReactNode;
};