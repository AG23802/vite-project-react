import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext.js';

export default function FruitDetails() {
  const { id } = useParams();
  const { cart, addToCart, removeFromCart, fruits } = useContext(CartContext);

  if (!id) return <div>No fruit ID provided</div>;

  let fruit = fruits.find((fruit) => fruit.id === parseInt(id));

  return (
    <div>
      <h2>Fruit Details</h2>
      {(fruit) ? (
      <>
        <p>Fruit ID: {id}</p>
        <span>
          {fruit.name} (CHF {fruit.price}) {fruit.emoji}
        </span>
        <div>{fruit.description}</div>
        { cart.includes(fruit.id) ? (
        <button onClick={() => removeFromCart(fruit.id)}>Remove from cart</button>
      ) : (
        <button onClick={() => addToCart(fruit.id)}>Add to cart</button>
      )}
      </>
      ) : (
      <span>
        Fruit not found. Please check the ID. {id} <br />
      </span>
      )
    }
    </div>
  );
}
