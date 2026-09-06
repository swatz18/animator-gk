import { projects } from "../../../data/projects";
import ProjectCard from "../../../components/ProjectCard/ProjectCard";
import "./SelectedWork.css";

function SelectedWork() {
  const selectedProjects = projects.slice(0, 4);

  return (
    <section className="selected-work">

      <div className="selected-work-header">

        <div>
          <p className="selected-work-label">
            SELECTED WORK
          </p>

          <h2 className="selected-work-title">
            A collection of
            <br />
            visual experiences.
          </h2>
        </div>

        <a
          href="/work"
          className="selected-work-link"
        >
          View all work
          <span>↗</span>
        </a>

      </div>


      <div className="selected-work-grid">

        {selectedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </section>
  );
}

export default SelectedWork;