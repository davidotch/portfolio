import { NavLink } from "react-router-dom";

export default function Header() {
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
          to="/skills"
          className={({ isActive }) => (isActive ? "header_link_active" : "link")}
        >
          Skills
        </NavLink>
        <NavLink
          to="/project"
          className={({ isActive }) => (isActive ? "header_link_active" : "link")}
        >
          Projets
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "header_link_active" : "link")}
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
}