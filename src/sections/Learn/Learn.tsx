import { learnData } from "./LearnData";
import "./Learn.css";
import usePageSEO from "../../hooks/usePageSEO";
import FeaturedTutorials from "./FeaturedTutorials/FeaturedTutorials";
import LongFormGrid from "./LongFormGrid/LongFormGrid";
import ShortsGrid from "./ShortsGrid/ShortsGrid";

function Learn() {
  usePageSEO(
    "Learn Motion Design, 3D Animation & Video Editing in Tamil | Animator GK",
    "Learn Blender 3D, After Effects, motion graphics, 3D animation, video editing, portfolio building and career development in Tamil with Animator GK. Explore practical tutorials, creative workflows and industry-focused guidance for aspiring 3D artists and motion designers.",
    "/learn"
  );
  return (
    <section className="learn-page">
       
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
      <FeaturedTutorials />
      <LongFormGrid />
      <ShortsGrid />
      
    </section>
  );
}

export default Learn;