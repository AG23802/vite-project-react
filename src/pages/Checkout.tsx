import { useContext } from "react"
import { UserContext } from "../contexts/UserContext.js"
import { CartContext } from "../contexts/CartContext.js"
import FruitList from "../components/FruitList.js"

export default function Checkout() {
    const {user} = useContext(UserContext)
    const {cart, total, cartItems} = useContext(CartContext)

    return (
        <>
        <h2>Check out</h2>
        <div>{user.username}</div>
        
        <FruitList fruits={cartItems} />
        <div>Total: CHF {total.toFixed(2)}</div>
        </>
    )
}