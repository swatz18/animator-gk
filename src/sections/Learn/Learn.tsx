import { learnData } from "./LearnData";
import "./Learn.css";
import Header from "../../components/Header/Header";

function Learn() {
  return (
    <section className="learn-page">
        <Header />
      


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <div className="learn-content">

        {/* =====================================
            LEFT CONTENT
        ===================================== */}

        <div className="learn-left">

          <h1 className="learn-title">
            <span>LEARN IN</span>

            <span className="purple">
              TAMIL.
            </span>
          </h1>


          <div className="learn-title-line" />


          {/* CATEGORIES */}

          <div className="learn-categories">

            {learnData.categories.map((category, index) => (
              <div
                className="learn-category"
                key={category}
              >
                <span>{category}</span>

                {index < learnData.categories.length - 1 && (
                  <span className="learn-dot" />
                )}
              </div>
            ))}

          </div>


          {/* TAMIL TEXT */}

          <div className="learn-tamil">
            தமிழில்
          </div>


          {/* YOUTUBE BUTTON */}

          <a
            href={learnData.youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="learn-youtube-button"
          >

            <span className="youtube-icon">
              ▶
            </span>

            <span>
              WATCH ON YOUTUBE
            </span>

            <span className="youtube-arrow">
              →
            </span>

          </a>

        </div>


        {/* =====================================
            RIGHT CONTENT
        ===================================== */}

        <div className="learn-right">

          <div className="learn-laptop-glow" />

          <img
            src={learnData.image}
            alt="Animator GK Tamil learning channel"
            className="learn-laptop"
          />

        </div>

      </div>

    </section>
  );
}

export default Learn;