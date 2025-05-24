import { createContext, useReducer, useState } from "react";

const UserContext = createContext("null");

function UserProvider({ children }) {
  //   const [user, setUser] = useState("guest");

  const userReducer = (state, action) => {
    switch (action.type) {
      case "login":
        return { ...state, user: action.payload };
      case "logout":
        return { ...state, user: action.payload };
    }
  };

  const [state, dispatch] = useReducer(userReducer, { user: null });

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
