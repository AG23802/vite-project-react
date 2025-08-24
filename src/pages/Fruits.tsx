import { useContext, useState } from "react";
import Search from "../components/Search.js";
import FruitList from "../components/FruitList.js";
import { CartContext } from "../contexts/CartContext.js";

export default function Fruits() {
    const {fruits} = useContext(CartContext)
    const [ query, setQuery ] = useState("");

    // Filter fruits based on the query
    const filteredFruits = fruits.filter(fruit =>
        fruit.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-y-4">
            <h2>Fruits</h2>
            <Search query={query} setQuery={setQuery} />
            <FruitList fruits={filteredFruits} />
        </div>
    )
}