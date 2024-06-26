import { createContext, useContext } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Product } from "../../models/product";
import { CartContextType, CartItem, CartProviderProps } from "./cartContext.types";

const CartContext = createContext<CartContextType | null>(null);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useLocalStorage<CartItem[]>("cart", []);

  /*
  function addItem(product, quantity) {
    setCart(prevItems => {
      const itemIndex = prevItems.findIndex(item => item.product.id === product.id);
      if (itemIndex > -1) {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity += quantity;
        return newItems;
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
  }

  function removeItem(productId) {
    setCart(prevItems => prevItems.filter(item => item.product.id !== productId));
  }

  function updateItemQuantity(productId, quantity) {
    setCart(prevItems => {
      return prevItems.map(item => {
        if (item.product.id === productId) {
          return { ...item, quantity };
        }
        return item;
      });
    });
  }

  function clearCart() {
    setCart([]);
  }

  function getItemQuantity(productId) {
    const item = cart.find(item => item.product.id === productId);
    return item ? item.quantity : 0;
  }
  */

  function addItem(product: Product) {
    setCart(Items => {
      if (isInCart(product)) {
        return [...Items, { product, quantity: 1 }];
      } else {
        return Items;
      }
    });
  }

  function removeItem(product: Product) {
    setCart(Items => Items.filter(item => item.product.id !== product.id));
  }

  function isInCart(product: Product) {
    return cart.some(item => item.product.id === product.id);
  }

  function toggleCartItem(product: Product) {
    if (isInCart(product)) {
      removeItem(product);
    } else {
      addItem(product);
    }
  }

  function incrementCartItem(product: Product) {
    setCart(Items => {
      return Items.map(item => {
        if (item.product.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    });
  }

  function decrementCartItem(product: Product) {
    setCart(Items => {
      return Items.map(item => {
        if (item.product.id === product.id) {
          const newQuantity = item.quantity - 1;
          return { ...item, quantity: newQuantity >= 1 ? newQuantity : 1 };
        }
        return item;
      });
    });
  }

  return (
    <CartContext.Provider value={{ cart, removeItem, isInCart, toggleCartItem, incrementCartItem, decrementCartItem }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}

export { CartProvider, useCart };