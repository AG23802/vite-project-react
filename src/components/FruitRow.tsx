import { useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContext.js";
import { useContext } from "react";
import type { Fruit } from "../types/Fruit.js";
import type { CartContextType } from "../types/CartContextType.js";

export default function FruitRow({ fruit } : { fruit: Fruit }) {
  const { cart, addToCart, removeFromCart } : CartContextType = useContext(CartContext);

  const navigate = useNavigate();

  const viewFruit = (id: number) => {
    navigate(`/products/${id}`);  
  }

  return (
    <div className="flex items-center justify-between border-b border-t border-gray-600 p-2">
      <div className="flex items-center gap-x-2">
        <span className="text-4xl">{fruit.emoji}</span>
        <span>
          {fruit.name} (CHF {fruit.price})
        </span>
      </div>

      <div className="flex gap-x-2">
      <button onClick={() => viewFruit(fruit.id)}>View Fruit</button>

      { cart.includes(fruit.id) ? (
        <button onClick={() => removeFromCart(fruit.id)}>Remove from cart</button>
      ) : (
        <button onClick={() => addToCart(fruit.id)}>Add to cart</button>
      )}
      </div>
    </div>
  );
}
