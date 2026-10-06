import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo" onClick={closeMenu}>
        Shraddha<span>.</span>
      </Link>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>

        <Link to="/" onClick={closeMenu}>
          Home
        </Link>

        <Link to="/about" onClick={closeMenu}>
          About
        </Link>

        <Link to="/skills" onClick={closeMenu}>
          Skills
        </Link>

        <Link to="/projects" onClick={closeMenu}>
          Projects
        </Link>

        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>

      </div>

      <div className="nav-right">

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

    </nav>
  );
}

export default Navbar;