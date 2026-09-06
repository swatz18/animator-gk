import "./ProjectCard.css";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">

      <div className="project-card-image">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
          />
        ) : (
          <div className="project-card-placeholder" />
        )}
      </div>

      <div className="project-card-info">

        <div>
          <p className="project-card-category">
            {project.category}
          </p>

          <h3 className="project-card-title">
            {project.title}
          </h3>
        </div>

        <span className="project-card-year">
          {project.year}
        </span>

      </div>

    </article>
  );
}

export default ProjectCard;