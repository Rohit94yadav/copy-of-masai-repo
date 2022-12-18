import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCityById } from "../Components/Api/CityApi";

function CityPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    setLoading(true);

    getCityById(id)
      .then((res) => {
        setLoading(false);
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [id]);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (!data.id) {
    return (
      <div>
        <h2>Something Went Wrong...</h2>
        <Link to="/">Back to HomePage</Link>
      </div>
    );
  }

  return (
    <div>
      <table>
        <tr>
          <th>Field Name</th>
          <th>Value</th>
        </tr>
        <tr>
          <td>ID</td>
          <td>{data.id}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td>population</td>
          <td>{data.population}</td>
        </tr>
        <tr>
          <td>country</td>
          <td>{data.country}</td>
        </tr>
      </table>
    </div>
  );
}

export default CityPage;
