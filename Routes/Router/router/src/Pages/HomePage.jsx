import { useState } from "react";
import { useNavigate } from "react-router";

export default function HomePage() {
  const [userName, setUserName] = useState();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard/profile", { state: { userName } });
  }
  return (
    <div>
      <h2>This is the HomePage</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={handleClick}>Go to Profile Page</button>
    </div>
  );
}
