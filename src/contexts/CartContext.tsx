import { createContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';
import type { CartContextType } from '../types/CartContextType.js';
import type { Fruit } from '../types/Fruit.js';
import type { Action } from '../types/Action.js';

interface CartProviderProps {
  children: React.ReactNode;
  fruits: Fruit[];
}

interface State {
  cart: number[];
  error: string | null;
}

// Provide a default empty state with no-op functions
const defaultCartContext: CartContextType = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  error: null,
  total: 0,
  fruits: [],
  cartItems: [],
};

const CartContext = createContext(defaultCartContext);

function CartProvider({ children, fruits } : CartProviderProps) {
  const [storedCart, updateCart] = useLocalStorage('cart', []);

  const cartReducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'addedToCart':
        return { ...state, cart:action.payload, error: null };
      case 'removedFromCart':
        return { ...state, cart:action.payload, error: null };
      case 'checkoutSuccess':
        return { ...state, cart:action.payload, error: null };
      case 'checkoutError':
        return { ...state, cart:action.payload, error: 'checkoutError' };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(cartReducer, { cart: storedCart, error: null });

  const addToCart = (fruitId: number) => {
    updateCart((prevCart: number[]) => {
      const newCart = prevCart ? [...prevCart, fruitId] : [fruitId];
      dispatch({ type: 'addedToCart', payload: newCart });
      return newCart;
    });
  };

  const removeFromCart = (fruitId: number) => {
    updateCart((prevCart: number[]) => {
      const newCart = prevCart ? prevCart.filter((id: number) => id !== fruitId) : [];
      dispatch({ type: 'removedFromCart', payload: newCart });
      return newCart;
    });
  };

  // derived state: get cart items and total price
  const cartItems = fruits.filter((fruit: Fruit) => state.cart.includes(fruit.id));
  const total = cartItems.reduce((sum: number, fruit: Fruit) => sum + fruit.price, 0);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, total, fruits, cartItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
