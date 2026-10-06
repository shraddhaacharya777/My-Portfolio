function About() {
  return (
    <section className="page">

      <p className="small-title">
        Get to know me
      </p>

      <h1>
        About <span>Me</span>
      </h1>

      <div className="about-content">

        <div className="about-text">

          <p>
            I am a Computer Science student interested in
            software development and web technologies.
          </p>

          <p>
            I enjoy learning new technologies, solving
            programming problems, and creating projects
            that help me improve my development skills.
          </p>

          <p>
            Currently, I am focusing on JavaScript,
            React, Python, Java, databases, and
            full-stack web development.
          </p>

        </div>

        <div className="about-card">

          <h2>What I Do</h2>

          <p>💻 Web Development</p>
          <p>⚛️ React Development</p>
          <p>🐍 Python Programming</p>
          <p>☕ Java Programming</p>

        </div>

      </div>

    </section>
  );
}

export default About;