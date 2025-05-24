import { useState } from 'react';

export default function Form() {
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

      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          type="text"
          value={name.firstName}
        />

        <input
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          type="text"
          value={name.lastName}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
