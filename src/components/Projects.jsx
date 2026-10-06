const projects = [
  {
    title: "Expense Tracker",
    description:
      "A mini web application for adding, managing, and tracking daily expenses.",
    technologies: "HTML • CSS • JavaScript",
    github: "https://github.com/shraddhaacharya777/Expense-Tracker"
  },

  {
    title: "EVision",
    description:
      "A mini EV charging station finder and booking application with search and booking features.",
    technologies: "HTML • CSS • JavaScript",
    github: "https://github.com/shraddhaacharya777/EVision"
  },

  {
    title: "Student Management Portal",
    description:
      "A React mini project for displaying student information using multiple pages and React Router.",
    technologies: "React • JavaScript • React Router",
    github: "YOUR_STUDENT_PORTAL_GITHUB"
  },

  {
    title: "Developer Profile Card",
    description:
      "A simple responsive developer profile card showcasing personal information, skills, and social links.",
    technologies: "HTML • CSS",
    github: "https://github.com/shraddhaacharya777/developer-profile-card"
  }
];

function Projects() {
  return (
    <section className="page">

      <p className="small-title">
        What I've built
      </p>

      <h1>
        My <span>Mini Projects</span>
      </h1>

      <p className="section-description">
        A collection of small projects I built while learning
        web development and programming.
      </p>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <div
            className="project-card"
            key={project.title}
          >

            <div className="project-number">
              0{index + 1}
            </div>

            <h2>
              {project.title}
            </h2>

            <p>
              {project.description}
            </p>

            <span className="technologies">
              {project.technologies}
            </span>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              View on GitHub →
            </a>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;