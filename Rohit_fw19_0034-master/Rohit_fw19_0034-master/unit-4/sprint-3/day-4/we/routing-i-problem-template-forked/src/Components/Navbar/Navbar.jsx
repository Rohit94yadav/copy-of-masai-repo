import React from "react";
import { Link, NavLink } from "react-router-dom";

const links = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/contact",
    title: "Contact"
  },
  {
    path: "/about-us",
    title: "About"
  },
  {
    path: "/services",
    title: "Services"
  },
  {
    path: "/login",
    title: "Login"
  }
];

function NavBar() {
  return (
    <>
      {links.map((link) => (
        <NavLink key={link.path} to={link.path}>
          {link.title}
        </NavLink>
      ))}
    </>
  );
}

export default NavBar;
