import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";

import Home from "./Home";
import Navbar from "./Navbar";

export default function AllRoutes() {
  return (
    <div>
<Navbar/>

      <Routes>
        <Route path={"/login"} element={<Login />}></Route>
      </Routes>

      
      <Routes>
        <Route path={"/home"} element={<Home />}></Route>
      </Routes>
    </div>
  );
}
