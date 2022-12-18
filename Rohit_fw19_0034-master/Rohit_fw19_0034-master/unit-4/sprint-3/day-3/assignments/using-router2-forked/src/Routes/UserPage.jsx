import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Context/AuthContext";

function getUsers() {
  return fetch("https://reqres.in/api/users").then((res) => res.json());
}

function UserPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    getUsers().then((res) => {
      console.log(res);
      setData(res);
    });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <button onClick={() => navigate("/")}>Go Home Using NAvigate</button>

      <Link to="/">
        <button>Home</button>
      </Link>

      {data?.data?.map((el) => {
        return (
          <div key={el.id}>
            <Link to={`/users/${el.id}`}>{el.first_name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default UserPage;
