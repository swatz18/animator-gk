import "./JourneyFour.css";

function JourneyFour() {
  return (
    <section className="journey-four">

      <div className="journey-four-container">

        {/* ================= LEFT / CONTENT ================= */}
        <div className="journey-four-content">

          <div className="journey-four-label">
            <span className="journey-four-label-dot"></span>
            <span>MY JOURNEY</span>
          </div>


          <div className="journey-four-title-row">

            <div className="journey-four-number">
              04
            </div>

            <h2>
              NOW I CREATE
              <br />
              <span>INDEPENDENTLY.</span>
            </h2>

          </div>


          <div className="journey-four-line"></div>


          <div className="journey-four-role">
            <span>Freelance Creator</span>
            <span className="journey-four-arrow">-</span>
            <span>Animator GK</span>
          </div>


          <p className="journey-four-description">
            I now work independently with clients
            <br />
            around the world, turning ideas into
            <br />
            impactful visual stories.
            <br />
            Freedom to create. Passion to deliver.
          </p>


          <div className="journey-four-date-card">

            <div className="journey-four-calendar">
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

            <div className="journey-four-date-text">
              <strong>2025 – Now</strong>
            </div>

          </div>

        </div>


        {/* ================= IMAGE ================= */}
        <div className="journey-four-image">

          <img
            src="/images/about/Journey 4.png"
            alt="Freelance creator workspace"
          />

          <div className="journey-four-image-overlay"></div>

        </div>

      </div>

    </section>
  );
}

export default JourneyFour;