function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Java",
    "C",
    "Git",
    "GitHub",
    "VS Code"
  ];

  return (
    <section className="page">

      <p className="small-title">
        My technical abilities
      </p>

      <h1>
        My <span>Skills</span>
      </h1>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div
            className="skill-card"
            key={skill}
          >
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;