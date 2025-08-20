import { useState, useContext } from 'react';
import './App.css';
import Search from './components/Search';
import Nav from './components/Nav/Nav';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Products from './pages/Products';
import Product from './pages/Product';
import { UserProvider, UserContext } from './contexts/UserContext';
import Logout from './components/Logout';
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './pages/Checkout';

export default function App() {
  function MainApp() {
    const { user } = useContext(UserContext);

    return user ? (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<span>404</span>} />
        </Routes>
        <Logout />
      </>
    ) : (
      <>
        <Login />
        <Register />
      </>
    );
  }

  return (
    <UserProvider>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </UserProvider>
  );
}
