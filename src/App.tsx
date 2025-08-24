import { useContext } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import FruitDetails from './pages/FruitDetails.js';
import { UserProvider, UserContext } from './contexts/UserContext.js';
import Login from './components/Login.js';
import Checkout from './pages/Checkout.js';
import { CartProvider, CartContext } from './contexts/CartContext.js';
import { fruits } from './data/fruits.js';
import Fruits from './pages/Fruits.js';
import ProtectedRoute from './components/ProtectedRoute.js';

export default function App() {
  function MainApp() {
    const { user } = useContext(UserContext);

    return user ? (
      <div className="min-h-screen w-[800px]">
        <div className='flex justify-between items-center mb-4'>
        </div>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/products/:id" element={<FruitDetails />} />
          </Route>
          <Route path="*" element={<span>404</span>} />
        </Routes>
      </div>
    ) : (
      <>
        <Login />
      </>
    );
  }

  return (
    <UserProvider>
      <BrowserRouter>
        <CartProvider fruits={fruits}>
          <Nav />
          <MainApp />
        </CartProvider>
      </BrowserRouter>
    </UserProvider>
  );
}
