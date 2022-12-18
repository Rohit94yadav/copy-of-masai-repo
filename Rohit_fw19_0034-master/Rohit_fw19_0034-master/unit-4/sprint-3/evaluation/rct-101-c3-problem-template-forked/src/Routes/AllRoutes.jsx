import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import SingleRestaurantPage from "./SingleRestaurantPage";

function AllRoutes() {
  return (
   <Routes>
     <Route path = "/" element={<Home/>}/>
     <Route path = "/login" element={<Login/>}/>
     <Route path = "/dashboard" element={<Dashboard/>}/>
     <Route path = "/restaurants/<id>" element={<SingleRestaurantPage/>}/>
     </Routes>
  );
}

export default AllRoutes;
