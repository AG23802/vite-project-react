import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Login() {
  const [value, setValue] = useState('');
  const { dispatch } = useContext(UserContext);

  //   const { user, setUser } = useContext(UserContext);
  const [user, setUser] = useLocalStorage('user', 'defaultUser');

  const handleSubmit = (e) => {
    e.preventDefault();
    // setUser(value);
    dispatch({ type: 'login', payload: value });
    setUser(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
