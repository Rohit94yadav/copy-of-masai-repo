import { Route, Routes } from "react-router-dom";
import CityPage from "./CityPage";
import HomePage from "./HomePage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/city/:id" element={<CityPage />} />
    </Routes>
  );
}

export default AllRoutes;
