import "./About.css";
import JourneyFour from "./Journey/JourneyFour";
import JourneyOne from "./Journey/JourneyOne";
import JourneyThree from "./Journey/JourneyThree";
import JourneyTwo from "./Journey/JourneyTwo";
import WhatIBring from "./Journey/WhatIBring";

function About() {
  return (
    <main className="about-page">

      {/* ================= ABOUT HERO ================= */}

      <section className="about-hero">

        {/* LEFT CONTENT */}

        <div className="about-content">

          <div className="about-label">
            ABOUT ME
          </div>

          <div className="about-label-line" />


          <h1 className="about-title">

            <span>
              HI, I'M
            </span>

            <span>
              ANIMATOR <strong>GK.</strong>
            </span>

          </h1>


          <p className="about-description">
            helping brands bring ideas to life through motion design, animation, 3D and editing. Based in Coimbatore, Tamil Nadu, India.
          </p>


          {/* ================= STATS ================= */}

          <div className="about-stats">

            <div className="about-stat">

              <strong>
                7+
              </strong>

              <span>
                YEARS
                <br />
                EXPERIENCE
              </span>

            </div>


            <div className="about-stat-divider" />


            <div className="about-stat">

              <strong>
                100+
              </strong>

              <span>
                PROJECTS
                <br />
                COMPLETED
              </span>

            </div>

          </div>

        </div>


        {/* ================= PORTRAIT ================= */}

        <div className="about-visual">

          <div className="about-glow" />

          <div className="about-rings">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <img
            src="/images/about/gk1.png"
            alt="Animator GK"
            className="about-portrait"
          />

        </div>

      </section>


      {/* =================================================
          ABOUT SECTION 2 — MY JOURNEY
      ================================================= */}

      <JourneyOne />
      <JourneyTwo />
      <JourneyThree />
      <JourneyFour />
      <WhatIBring/>
      <section className="about-intro">
        <p>
          Animator GK is a freelance Explainer Video Artist, Motion Designer,
          3D Artist and Video Editor based in Coimbatore, India. I work with
          clients across India and worldwide, creating 2D/3D explainer videos,
          motion graphics, kinetic typography, character animation, product
          animations, UI/UX animations, video editing, VFX and sound design.<br/>
          I also specialise in 3D product visualisation, architectural
          visualisation, interior visualisation, house elevation design and
          end-to-end 3D production from modelling and texturing to lighting,
          animation and rendering.
        </p>
      </section>
    </main>
  );
}

export default About;