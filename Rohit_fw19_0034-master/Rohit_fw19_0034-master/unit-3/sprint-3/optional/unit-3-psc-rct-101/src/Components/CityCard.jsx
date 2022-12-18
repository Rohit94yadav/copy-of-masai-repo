import { Link } from "react-router-dom";

function CityCard({ name, population, country, id }) {
  return (
    <tr>
      <td>
      
        <Link to={`/city/${id}`}>{id}</Link>
      </td>
      <td>{name}</td>
      <td>{population}</td>
      <td>{country}</td>
    </tr>
  );
}

export default CityCard;
