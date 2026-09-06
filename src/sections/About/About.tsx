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
            helping brands bring ideas to life through motion design, animation, 3D and editing.
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
    </main>
  );
}

export default About;