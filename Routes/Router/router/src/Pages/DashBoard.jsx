import { Link, Outlet } from "react-router-dom";

export default function DashBoard() {
  return (
    <div>
      <ul>
        <li>
          <Link to="profile"> Profile </Link>
        </li>
        <li>
          <Link to="settings"> Settings </Link>
        </li>
      </ul>
      <h2>This is the DashBoard</h2>
      <Outlet />
    </div>
  );
}
