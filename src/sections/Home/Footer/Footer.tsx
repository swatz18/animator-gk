import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (

<footer className="footer">

  {/* ================= CTA ================= */}

  <div className="footer-main">

    <div className="footer-cta">

      <p className="footer-eyebrow">
        Have a project in mind?
      </p>

      <div className="footer-title-row">
        <h2><strong>LET’S COLLABORATE</strong></h2>

        <span className="footer-arrow">
          →
        </span>
      </div>

      <div className="footer-title-line">
        <span />
      </div>

    </div>


    {/* ================= SOCIAL LINKS ================= */}

    <div className="footer-socials">

      <a
        href="https://www.instagram.com/animator_gk/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-social"
      >
        <span className="social-icon instagram-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <circle
              cx="12"
              cy="12"
              r="4.2"
              stroke="currentColor"
              strokeWidth="1.8"
            />
            <circle
              cx="17.3"
              cy="6.8"
              r="1"
              fill="currentColor"
            />
          </svg>
        </span>

        <span>INSTAGRAM</span>
      </a>


      <span className="footer-divider" />


      <a
        href="https://www.linkedin.com/in/gopalakrishnan-r-47314a154/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-social"
      >
        <span className="social-icon linkedin-icon">
          in
        </span>

        <span>LINKEDIN</span>
      </a>


      <span className="footer-divider" />


      <a
        href="https://www.youtube.com/@animatorgk"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-social"
      >
        <span className="social-icon youtube-icon">
          ▶
        </span>

        <span>YOUTUBE</span>
      </a>


      <span className="footer-divider" />


      <a
        href="https://www.behance.net/gopalakrishnanr"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-social"
      >
        <span className="behance-icon">
          Bē
        </span>

        <span>BEHANCE</span>
      </a>

    </div>

  </div>


  {/* ================= PAGE NAVIGATION ================= */}

  <nav className="footer-nav">

    <Link to="/">Home</Link>

    <span>•</span>

    <Link to="/about">About</Link>

    <span>•</span>

    <Link to="/learn">Learn</Link>

    <span>•</span>

    <Link to="/contact">Contact</Link>

  </nav>


  {/* ================= BACK TO TOP ================= */}

  <button
    className="footer-back-to-top"
    onClick={() =>
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
    aria-label="Back to top"
  >
    ↑
  </button>


  {/* ================= COPYRIGHT ================= */}

  <div className="footer-copyright">
    © 2026 Animator GK
    <span>•</span>
    All Rights Reserved
  </div>

</footer>
 );
}

export default Footer;