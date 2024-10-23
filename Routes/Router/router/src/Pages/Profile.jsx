import { useLocation } from "react-router";

export default function Profile() {
  const location = useLocation();
  const { userName } = location.state || {};
  return (
    <div>
      <h2>This is the Profile Page</h2>
      <h3>This is the Profile of {userName}</h3>
      {/* <h3>This is the PathName : {location.pathname}</h3> */}
    </div>
  );
}
