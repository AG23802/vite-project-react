import { createContext, useReducer } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const UserContext = createContext('null');

function UserProvider({ children }) {
  const [storedUser, setStoredUser, removeStoredUser] = useLocalStorage(
    'user',
    null
  );

  const userReducer = (state, action) => {
    switch (action.type) {
      case "loginStart":
        return { ...state, loading: true, error: null };
      case 'loginSuccess':
        return { user: action.payload, loading: false, error: null };
      case 'loginError':
        return { ...state, loading: false, error: action.payload };
      case 'logout':
        return { user: null, loading: false, error: null };
    }
  };

  const [state, dispatch] = useReducer(userReducer, { user: storedUser });

  const login = async (username, password) => {
    dispatch({ type: "loginStart" });
    try {
      const res = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setStoredUser({...data, username: username});
        dispatch({ type: 'loginSuccess', payload: data });
      } else {
        dispatch({ type: 'loginError', payload: data.error });
      }
    } catch (error) {
      dispatch({ type: 'loginError', payload: error.message });
    }
  };

  const logout = () => {
    removeStoredUser();
    dispatch({ type: 'logout' });
  };

  return (
    <UserContext.Provider value={{ ...state, dispatch, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
