import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>

      {/* LOGO */}
      <Link
        to="/"
        className="site-logo"
        aria-label="Animator GK home"
      >
        <span>ANIMATOR GK</span>
        {/* <span className="logo-dot" /> */}
      </Link>


      {/* DESKTOP NAV */}
      <nav className="desktop-nav">

        <Link to="/">
          HOME
        </Link>

        <Link to="/about">
          ABOUT
        </Link>

        <Link to="/learn">
          LEARN
        </Link>

        <Link to="/contact">
          CONTACT
        </Link>

      </nav>


      {/* HAMBURGER */}
      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>


      {/* FULLSCREEN MENU */}
      <Navigation
        isOpen={menuOpen}
        onNavigate={() => setMenuOpen(false)}
      />

    </header>
  );
}

export default Header;