// 2 - Links com React Router
import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link> */}
      <NavLink
        to="/"
        // Para controlar se o link está ativo ou não (exclusivo do NavLink):

        // className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")}
      >
        Home
      </NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
