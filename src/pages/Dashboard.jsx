import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div>Dashboard</div>
      <Link to="/dashboard/profile">Profile</Link>
      <Link to="/dashboard/settings">Settings</Link>
      <Outlet />
    </div>
  );
}
