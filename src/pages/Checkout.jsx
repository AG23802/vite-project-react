import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { CartContext } from "../contexts/CartContext"
import FruitList from "../components/FruitList"

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