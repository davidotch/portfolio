import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
        <a href="/" className="header_logo">CARDON DAVID</a>
      <div className="header_link">
        <Link
          to="/"
          className="header_link_active" 
        >
          Accueil
        </Link>
        <Link
          to="/skills"
          className="header_link_active"
        >
          Skills
        </Link>
        <Link
          to="/project"
          className="header_link_active"
        >
          Portfolio
        </Link>
        <Link
          to="/contact"
          className="header_link_active"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}