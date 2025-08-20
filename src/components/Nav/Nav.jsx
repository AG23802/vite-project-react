import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

export default function Nav() {
    return (
        <ul>
            <Link to="/">Home</Link>
            <Link to="/checkout">Checkout</Link>
            <Link to="/products">Products</Link>
            <Link to="/dashboard">Dashboard</Link>
        </ul>
        // <div className={styles.nav}>🥥 Fruit App</div>
    );
}