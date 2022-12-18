import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import HomePage from "./HomePage";
import SingleUserPage from "./SingleUserPage";
import UserPage from "./UserPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route
        path="/users"
        element={
          <PrivateRoute>
            <UserPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/users/:id"
        element={
          <PrivateRoute>
            <SingleUserPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
export default AllRoutes;
