import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard/profile", {
      state: {
        username,
      },
    });
  };

  return (
    <div>
      <div>Home</div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleClick}>Profile</button>
    </div>
  );
}
