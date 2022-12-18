import RestaurantCard from "./RestaurantCard";

function RestaurantTable() {

 

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        <RestaurantCard />
      </tbody>
    </table>
  );
}

export default RestaurantTable;
