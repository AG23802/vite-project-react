import { useLocation } from "react-router-dom";

export default function Profile() {
  const location = useLocation();
  const { username } = location.state;
  return (
    <div>
      <h3>Profile</h3>
      <span>{username}</span>
    </div>
  );
}
