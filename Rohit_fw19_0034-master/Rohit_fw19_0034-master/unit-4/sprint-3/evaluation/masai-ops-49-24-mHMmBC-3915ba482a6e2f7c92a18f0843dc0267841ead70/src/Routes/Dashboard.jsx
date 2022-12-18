import Loader from "../Components/Loader";
import RestaurantTable from "../Components/RestaurantTable";

function Dashboard() {
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
      <br />
      <div>
        <select data-testid="filter-box">
          <option value="">All</option>
          {/* fine_dining, ethnic, fast_food, cafe, casual_dining	 */}
        </select>
      </div>
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader />
        <RestaurantTable/>
      </div>
      <br />
      <div data-testid="pagination-container">{/* Pagination */}</div>
    </div>
  );
}

export default Dashboard;
