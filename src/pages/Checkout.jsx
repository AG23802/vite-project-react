import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function Checkout() {
    const {user} = useContext(UserContext)
    
    return (
        <div>Check out as {user}</div>
    )
}