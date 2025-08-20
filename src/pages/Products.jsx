import { useState } from "react";
import Search from "../components/Search";
import FruitList from "../components/FruitList";

export default function Products() {
    const [fruitData, setFruitData] = useState([]);
    return (
        <div>
            <h1>Products List</h1>
            <Search fruitData={fruitData} setFruitData={setFruitData} />
            <FruitList fruitData={fruitData} />
        </div>
    )
}