import "./WhatIBring.css";

function WhatIBring() {
  const skills = [
    {
      number: "01",
      icon: "◇",
      title: "7+ YEARS OF EXPERIENCE",
      description:
        "Worked across diverse projects, styles and production challenges.",
    },
    {
      number: "02",
      icon: "T",
      title: "MOTION DESIGN",
      description:
        "From kinetic typography to character and motion graphics, I bring ideas to life through motion.",
    },
    {
      number: "03",
      icon: "◯",
      title: "3D SKILLS",
      description:
        "Strong understanding of modelling, texturing, lighting, animation and rendering in 3D.",
    },
    {
      number: "04",
      icon: "✦",
      title: "2D / 3D HYBRID",
      description:
        "Combining the power of 2D and 3D, a hybrid approach that adds depth and flexibility to every project.",
    },
    {
      number: "05",
      icon: "▣",
      title: "VIDEO EDITING",
      description:
        "Editing with rhythm and purpose to craft engaging videos that flow seamlessly.",
    },
    {
      number: "06",
      icon: "⚙",
      title: "END-TO-END PRODUCTION",
      description:
        "Handling the complete pipeline, I can take an idea from a blank canvas to a finished piece.",
    },
  ];

  return (
    <section className="what-bring">

      {/* ================= HEADER ================= */}

      <div className="what-bring-header">

        <h2>
          WHAT I BRING
        </h2>

        <div className="what-bring-line" />

        <p>
          A blend of creativity, technical skills and storytelling
          <br />
          to create visuals that communicate, engage and leave an impact.
        </p>

      </div>


      {/* ================= SKILLS ================= */}

      <div className="what-bring-grid">

        {skills.map((skill) => (
          <div
            className="what-bring-item"
            key={skill.number}
          >

            {/* ICON */}

            <div className="what-bring-icon">
              {skill.icon}
            </div>


            {/* NUMBER */}

            <div className="what-bring-number">
              {skill.number}
            </div>


            {/* CONTENT */}

            <div className="what-bring-content">

              <h3>
                {skill.title}
              </h3>

              <p>
                {skill.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhatIBring;