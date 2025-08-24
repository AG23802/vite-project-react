import type { Fruit } from "./Fruit.js";

export interface CartContextType {
  cart: number[];
  error: string | null;
  addToCart: (fruitId: number) => void;
  removeFromCart: (fruitId: number) => void;
  total: number;
  fruits: Fruit[];  
  cartItems: Fruit[];
}