import { heroData } from "./heroData";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* ================= PORTFOLIO CARDS ================= */}

      <div className="hero-cards">
        {heroData.projects.map((project) => (
          <article
            key={project.id}
            className={`hero-card ${project.className}`}
          >
            <span className="hero-card-label">
              {/* {project.label} */}
            </span>

            <div className="hero-card-content">
              <img
                src={project.image}
                // alt={project.label}
              />
            </div>
          </article>
        ))}
      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="hero-content">

        <h1 className="hero-title">
          {heroData.title}
        </h1>

        <div className="hero-roles">
          {heroData.roles.map((role, index) => (
            <div className="hero-role" key={role}>

              <span>{role}</span>

              {index < heroData.roles.length - 1 && (
                <span className="hero-role-dot" />
              )}

            </div>
          ))}
        </div>

      </div>


      {/* ================= BOTTOM CONTENT ================= */}

      <div className="hero-bottom">

        {/* <p className="hero-description">
          {heroData.description.normal}{" "}
          <span>
            {heroData.description.highlighted}
          </span>
        </p> */}


        {/* <div className="hero-scroll">
          <span>Scroll to explore</span>

          <div className="hero-mouse">
            <div className="hero-mouse-wheel" />
          </div>
        </div> */}

      </div>

    </section>
  );
}

export default Hero;