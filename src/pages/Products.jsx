import { useParams } from "react-router-dom"

export default function Products() {
    const { id } = useParams();
    return (
        <div>
            <h1>Products List</h1>
            <p>Product ID: { id }</p>
        </div>
    )
}