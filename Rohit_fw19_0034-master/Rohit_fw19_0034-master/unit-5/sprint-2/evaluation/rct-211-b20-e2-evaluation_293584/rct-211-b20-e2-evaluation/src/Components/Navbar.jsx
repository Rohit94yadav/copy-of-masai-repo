import React from "react";
import { Link } from "react-router-dom";
import ReqAuth from "./ReqAuth";

const Navbar = () => {
  return (
    <div data-testid="navbar">
      <div data-testid="navbar-home-link">
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        <Link to="./login" >
        
        <button   data-testid="navbar-login-button">LOGIN</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
