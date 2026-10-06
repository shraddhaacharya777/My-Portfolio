import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="home-page">

      <div className="home-content">

        <p className="small-title">
          Hello, I'm
        </p>

        <h1>
          Shraddha <span>Acharya</span>
        </h1>

        <h2>
          Computer Science Student
        </h2>

        <p className="home-text">
          I'm passionate about coding, web development,
          and building creative projects using modern
          technologies.
        </p>

        <div className="home-buttons">

          <Link to="/projects" className="primary-btn">
            View Projects
          </Link>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            📄 Resume
          </a>

        </div>

        <div className="social-links">

          <a
            href="https://github.com/shraddhaacharya777"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shraddha-acharya-01083b378?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

        </div>

      </div>

      <div className="home-image">

        <div className="image-circle">
          <img
            src="/shraddha photo.jpeg"
            alt="Shraddha"
          />
        </div>

      </div>

    </section>
  );
}

export default Home;