import "./JourneyThree.css";

function JourneyThree() {
  return (
    <section className="journey-three">

      <div className="journey-three-container">

        {/* ================= LEFT / CONTENT ================= */}
        <div className="journey-three-content">

          <div className="journey-three-label">
            <span className="journey-three-label-dot"></span>
            <span>MY JOURNEY</span>
          </div>


          <div className="journey-three-title-row">

            <div className="journey-three-number">
              03
            </div>

            <h2>
              I LEARNED TO
              <br />
              OWN THE WHOLE
              <br />
              <span>PIPELINE.</span>
            </h2>

          </div>


          <div className="journey-three-line"></div>


          <div className="journey-three-role">
            <span>3D Generalist &amp; Motion Designer</span>
            <span className="journey-three-arrow">-</span>
            <span>Mypromovideos, Coimbatore</span>
          </div>


          <p className="journey-three-description">
            I expanded into 3D and took ownership of
            <br />
            the entire pipeline from modelling,
            <br />
            texturing, lighting and animation to rendering.
            <br />
            I developed a stylized 3D approach for
            <br />
            explainer videos and mastered the
            <br />
            2D + 3D workflow, combining both to create
            <br />
            engaging visual stories.
          </p>


          <div className="journey-three-date-card">

            <div className="journey-three-calendar">
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

            <div className="journey-three-date-text">
              <strong>2021 – 2025</strong>
            </div>

          </div>

        </div>


        {/* ================= IMAGE ================= */}
        <div className="journey-three-image">

          <img
            src="/images/about/Journey 3.png"
            alt="3D animation workspace"
          />

          <div className="journey-three-image-overlay"></div>

        </div>

      </div>

    </section>
  );
}

export default JourneyThree;