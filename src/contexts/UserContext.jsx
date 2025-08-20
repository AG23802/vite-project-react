import { createContext, useReducer, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const UserContext = createContext("null");

function UserProvider({ children }) {
  const [storedUser, setStoredUser] = useLocalStorage('user', null);

  const userReducer = (state, action) => {
    switch (action.type) {
      case "login":
        setStoredUser(action.payload);
        return { ...state, user: action.payload };
      case "logout":
        setStoredUser(null);
        return { ...state, user: action.payload };
    }
  };

  const [state, dispatch] = useReducer(userReducer, { user: storedUser });

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
