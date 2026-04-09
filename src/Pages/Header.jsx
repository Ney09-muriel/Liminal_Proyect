import { useState } from "react";
import "../Stylesheets/Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg fixed-top liminal-navbar">
      <div className="container-fluid px-4">
        {/* Logo */}
        <a className="navbar-brand liminal-logo" href="#inicio">
          LIMINAL
        </a>

        {/* Hamburger para mobile */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a className="nav-link liminal-link" href="#inicio">INICIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link liminal-link" href="#capitulos">CAPÍTULOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link liminal-link" href="#personajes">PERSONAJES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link liminal-link" href="#sinopsis">SINOPSIS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;