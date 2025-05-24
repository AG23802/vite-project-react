import { createContext, useReducer, useState } from 'react';
import './App.css';
import Search from './components/Search';
import FruitList from './components/FruitList';
import FruitItem from './components/FruitItem';
import Nav from './components/Nav/Nav';

import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Products from './pages/Products';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import { UserProvider } from './contexts/UserContext';
import Logout from './pages/Logout';
import useLocalStorage from './hooks/useLocalStorage';

export default function App() {
  const [user] = useLocalStorage('user', 'defaultUser');

  return (
    <div>
      {user}
      <UserProvider>
        <Login />
        <Checkout />
        <Logout />
      </UserProvider>
    </div>
  );

  const [fruitData, setFruitData] = useState([]);
  const [fruitID, setFruitID] = useState();

  const reducer = (state, action) => {
    let { type, payload } = action;

    if (type == 'increment') {
      return {
        ...state,
        value: state.value + payload,
        dirty: true,
      };
    } else {
      return {
        ...state,
        value: state.value - payload,
        dirty: true,
      };
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    value: 0,
    dirty: false,
  });

  // return (
  //   <div>
  //     <BrowserRouter>
  //       <Nav />
  //       <Search fruitData={fruitData} setFruitData={setFruitData} />

  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/products/:id" element={<Products />} />
  //         <Route path="/dashboard" element={<Dashboard />}>
  //           <Route path="/dashboard/profile" element={<Profile />} />
  //           <Route path="/dashboard/settings" element={<Settings />} />
  //         </Route>
  //         <Route path="*" element={<span>404</span>} />
  //       </Routes>
  //     </BrowserRouter>
  //   </div>
  // );

  return (
    <>
      {state.value}
      <div>{state.dirty ? 'Dirty' : 'Not Dirty'}</div>

      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>
        Decrement
      </button>
      <Nav />

      <div style={{ display: 'flex' }}>
        <div>
          <FruitList fruitData={fruitData} setFruitID={setFruitID} />
        </div>
        <FruitItem fruitID={fruitID} />
      </div>

      {/* <Form />
      <Message count={count} setCount={setCount} />
      { display ? <Hello person={person} /> : <Fruits /> } */}
    </>
  );
}
