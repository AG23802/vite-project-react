import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Logout() {
  const { dispatch } = useContext(UserContext);
//   const { user, setUser } = useContext(UserContext);

    // setUser(value);

  return (
    <div>
      <button onClick={(e) => dispatch({type: "logout", payload: null})}>Log Out</button>
    </div>
  );
}
