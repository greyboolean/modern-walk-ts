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

  function addCartItem(product: Product) {
    setCart(cart => [...cart, { product, quantity: 1 }]);
  }

  function removeCartItem(product: Product) {
    setCart(cart => cart.filter(cartItem => cartItem.product.id !== product.id));
  }

  function isInCart(product: Product) {
    return cart.some(cartItem => cartItem.product.id === product.id);
  }

  function toggleCartItem(product: Product) {
    if (isInCart(product)) {
      removeCartItem(product);
    } else {
      addCartItem(product);
    }
  }

  function incrementCartItem(product: Product) {
    setCart(cart => {
      return cart.map(cartItem => {
        if (cartItem.product.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
    });
  }

  function decrementCartItem(product: Product) {
    setCart(cart => {
      return cart.map(cartItem => {
        if (cartItem.product.id === product.id) {
          const newQuantity = cartItem.quantity - 1;
          return { ...cartItem, quantity: newQuantity >= 1 ? newQuantity : 1 };
        }
        return cartItem;
      });
    });
  }

  return (
    <CartContext.Provider value={{ cart, removeCartItem, isInCart, toggleCartItem, incrementCartItem, decrementCartItem }}>
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