import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Logout from '../Logout';
import { UserContext } from '../../contexts/UserContext';

export default function Nav() {
  const { total } = useContext(CartContext);
  const { user } = useContext(UserContext);
  return (
    <div className="flex items-center justify-between w-full">
      <div className={styles.nav}>🥥 Fruit App</div>
      {user ? (
        <>
          <div className="flex gap-8">
            <Link to="/">Home</Link>
            <Link to="/fruits">Fruits</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/checkout">🛒 (CHF {total})
            </Link>
            <Logout />
          </div>
        </>
      ) : null}
    </div>
  );
}
