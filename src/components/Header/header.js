import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
        <h1>DC</h1>
      <div className="header_link">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "header_link_active" : "link")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "header_link_active" : "link")}
        >
          A Propos
        </NavLink>
      </div>
    </header>
  );
}