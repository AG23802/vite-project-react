import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  });

  const submit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <div>
      <span>
        {name.firstName} {name.lastName}
      </span>

      <form onSubmit={submit}>
        <input
          placeholder='First Name'
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />

        <input
          placeholder='Last Name'
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />

        <button>Register</button>
      </form>
    </div>
  );
}
