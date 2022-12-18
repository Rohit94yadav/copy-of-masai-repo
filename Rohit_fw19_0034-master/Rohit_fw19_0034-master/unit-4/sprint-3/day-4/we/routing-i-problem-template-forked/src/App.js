import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={ <h1>Home</h1>} />
      <Route path="/about-us" element={<h1>About</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} />
      <Route path="/login" element={ <h1>Login</h1>} />
      <Route path="/services" element={ <h1>Services</h1>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
