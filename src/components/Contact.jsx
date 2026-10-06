import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting me! 😊");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="page">

      <p className="small-title">
        Let's connect
      </p>

      <h1>
        Contact <span>Me</span>
      </h1>

      <div className="contact-container">

        <div className="contact-info">

          <h2>
            Let's Talk 👋
          </h2>

          <p>
            Have a project idea or want to connect?
            Feel free to send me a message.
          </p>

          <p>
            📧 shraddhaacharya777@gmail.com
          </p>

          <p>
            📍 India
          </p>

          <div className="contact-socials">

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

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message →
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;