import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/about",
    title: "About"
  },
  {
    path: "/contact",
    title: "Contact"
  },
  {
    path: "/Users",
    title: "User"
  }
];

function Navbar() {
  return (
    <div>
      {links.map((link) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.isActive : styles.default
          }
          key={link.path}
          to={link.path}
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
