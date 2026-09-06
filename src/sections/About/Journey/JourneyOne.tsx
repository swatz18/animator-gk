import "./JourneyOne.css";

function JourneyOne() {
  return (
    <section className="journey-one">

      <div className="journey-one-container">

        {/* ================= LEFT / CONTENT ================= */}
        <div className="journey-one-content">

          <div className="journey-one-label">
            <span className="journey-one-label-dot"></span>
            <span>MY JOURNEY</span>
          </div>

          <div className="journey-one-title-row">

            <div className="journey-one-number">
              01
            </div>

            <h2>
              I STARTED
              <br />
              WITH <span>ANIMATION.</span>
            </h2>

          </div>

          <div className="journey-one-line"></div>

          <div className="journey-one-role">
            <span>Intern</span>
            <span className="journey-one-arrow">-</span>
            <span>Mypromovideos, Coimbatore</span>
          </div>

          <p className="journey-one-description">
            It all began with a passion for storytelling.
            <br />
            As an intern, I learned the basics of
            <br />
            animation and motion, and turned my
            <br />
            curiosity into a career path.
          </p>

          <div className="journey-one-date-card">

            <div className="journey-one-calendar">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="17"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <path
                  d="M16 2V6M8 2V6M3 10H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M8 14H8.01M12 14H12.01M16 14H16.01M8 18H8.01M12 18H12.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="journey-one-date-text">
              <strong>2019</strong>
            </div>

          </div>

        </div>


        {/* ================= IMAGE ================= */}
        <div className="journey-one-image">

          <img
            src="/images/about/Journey 1.png"
            alt="Animation workspace"
          />

          <div className="journey-one-image-overlay"></div>

        </div>

      </div>

    </section>
  );
}

export default JourneyOne;