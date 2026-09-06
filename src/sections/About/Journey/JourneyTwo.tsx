import "./JourneyTwo.css";

function JourneyTwo() {
  return (
    <section className="journey-two">

      <div className="journey-two-container">

        {/* ================= LEFT / CONTENT ================= */}
        <div className="journey-two-content">

          <div className="journey-two-label">
            <span className="journey-two-label-dot"></span>
            <span>MY JOURNEY</span>
          </div>


          {/* ================= TITLE ================= */}
          <div className="journey-two-title-row">

            <div className="journey-two-number">
              02
            </div>

            <h2>
              THEN I MOVED
              <br />
              INTO <span>ANIMATION.</span>
            </h2>

          </div>


          <div className="journey-two-line"></div>


          {/* ================= ROLE ================= */}
          <div className="journey-two-role">
            <span>Junior Animator</span>
            <span className="journey-two-arrow">-</span>
            <span>Mypromovideos, Coimbatore</span>
          </div>


          {/* ================= DESCRIPTION ================= */}
          <p className="journey-two-description">
            I stepped into the world of 2D animation,
            <br />
            explainer videos and motion graphics.
            <br />
            I learned to bring ideas to life through
            <br />
            movement, timing and emotion.
          </p>


          {/* ================= DATE CARD ================= */}
          <div className="journey-two-date-card">

            <div className="journey-two-calendar">
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

            <div className="journey-two-date-text">
              <strong>2019 – 2021</strong>
            </div>

          </div>

        </div>


        {/* ================= IMAGE ================= */}
        <div className="journey-two-image">

          <img
            src="/images/about/Journey 2.png"
            alt="2D animation workspace"
          />

          <div className="journey-two-image-overlay"></div>

        </div>

      </div>

    </section>
  );
}

export default JourneyTwo;