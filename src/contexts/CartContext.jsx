import { createContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const CartContext = createContext(null);

function CartProvider({ children, fruits }) {
  const [storedCart, updateCart] = useLocalStorage('cart');

  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'addedToCart':
        return { ...state, cart:action.payload, error: null };
      case 'removedFromCart':
        return { ...state, cart:action.payload, error: null };
      case 'checkoutSuccess':
        return { ...state, cart:action.payload, error: null };
      case 'checkoutError':
        return { ...state, cart:action.payload, error: 'checkoutError' };
    }
  };

  const [state, dispatch] = useReducer(cartReducer, { cart: storedCart, error: null });

  const addToCart = (fruitId) => {
    updateCart((prevCart) => {
      const newCart = prevCart ? [...prevCart, fruitId] : [fruitId];
      dispatch({ type: 'addedToCart', payload: newCart });
      return newCart;
    });
  };

  const removeFromCart = (fruitId) => {
    updateCart((prevCart) => {
      const newCart = prevCart ? prevCart.filter((id) => id !== fruitId) : [];
      dispatch({ type: 'removedFromCart', payload: newCart });
      return newCart;
    });
  };

  // derived state: get cart items and total price
  const cartItems = fruits.filter((fruit) => state.cart.includes(fruit.id));
  const total = cartItems.reduce((sum, fruit) => sum + fruit.price, 0);

  return (
    <CartContext.Provider
      value={{ ...state, addToCart, removeFromCart, total, fruits, cartItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
