import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import RestaurantPage from "./RestaurantPage";

function AllRoutes() {

  return <div>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login " element={<Login/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/restaurants/<id>" element={<RestaurantPage/>}/>
</Routes>

  </div>;
}

export default AllRoutes;
