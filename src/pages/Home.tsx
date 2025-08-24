import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext.js';

export default function Home() {
  let { fruits } = useContext(CartContext);
  const [query, setQuery] = useState("");


  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
