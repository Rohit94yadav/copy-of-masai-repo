import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Components/Context/AuthContext";

function HomePage() {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  if (isAuth) {
    return <Navigate to="/users" />;
  }

  return (
    <div>
      <h1>Home</h1>
      <div>
        <button onClick={toggleAuth}>Login</button>
      </div>
    </div>
  );
}
export default HomePage;
