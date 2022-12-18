import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function getUser(id) {
  return fetch("https://reqres.in/api/users/" + id).then((res) => res.json());
}

function SingleUserPage() {
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    getUser(params.id).then((res) => {
      setData(res.data);
    });
  }, [params.id]);
  console.log("h1", data);

  return (
    <div>
      <h1>User ID: {params.id} </h1>
      <img src={data.avatar} alt={data.avatar} width="120px" />
      <h3>Name:{`${data.first_name} ${data.last_name}`} </h3>
      <h3>Email: {data.email}</h3>
      <Link to="/users">Back</Link>
    </div>
  );
}

export default SingleUserPage;
