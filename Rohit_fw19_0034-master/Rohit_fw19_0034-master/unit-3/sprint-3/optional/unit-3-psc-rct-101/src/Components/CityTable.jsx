import CityCard from "./CityCard";

function CityTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>POPULATION</th>
          <th>COUNTRY</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <CityCard
            key={item.id}
            id={item.id}
            name={item.name}
            population={item.population}
            country={item.country}
          />
        ))}
      </tbody>
    </table>
  );
}

export default CityTable;
