import { useEffect, useState } from "react";
import RestaurantTable from "../Components/RestaurantTable";




function Dashboard() {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  

  const getRestaurant = () => {
    return fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`
    ).then((res) => res.json());
  };

  useEffect(() => {
    setLoading(true);
    getRestaurant()
      .then((res) => {
        setLoading(false);
        setData(res);
       
        console.log(res)
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  },[]);

  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token"></b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {loading ? <h2>Loading...</h2>:<RestaurantTable data={data} />}
      </div>
      <div data-testid="pagination-container"></div>
    </div>
  );
}

export default Dashboard;
