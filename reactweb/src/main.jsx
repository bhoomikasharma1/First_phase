import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import logo from "./logo.png";

const experiences = [
  {
    period: "Dec 2022 - Jan 2026",
    role: "React Web Developer @ ANPR Solution LLP",
    description:
      "At ANPR Solution LLP, Developed and maintained scalable React.js applications for enterprise-level solutions. Implemented reusable UI components using Material UI(MUI), significantly improving development efficiency and design consistency.Integrated REST APIs using Axios and engineered dynamic data rendering for real-time applications.",
      
    tech: [
      "React js",
      "Next.js",
      "HTML5",
      "Tailwind CSS",
      "Typescript",
      "Material UI (MUI)"],
  },
];

const projects = [
  {
    title: "Key Project: Visitor Management System (Enterprise Web Application)",
    subtitle: "Visitor Management System App - Link",
    description:"Lifecycle Management: Designed and integrated request lifecycle states including Approved, Rejected, Pending, and Missed.Role-Based Security: Implemented role-based workflows for Visitors, Employees,and Admins, including identity proof verification and visit scheduling.Business Logic: Applied critical business rules, such as limiting active requests per company and enforcing daily request maximums.Admin Dashboards: Created comprehensive dashboards for managing and tracking full visit history and check-in/out statuses.",
    tech: [" React.js, JavaScript (ES6+), Material UI, REST APIs, Axios, Formik, Yup."]
  },
  
];

function App() {
  return (
    <>
      <header className="header">
        <div className="container nav">
          <h2 className="logo"><img src={logo} alt="Bhoomika Sharma logo" className="logo-image" /></h2>
          <nav>
            <a href="#home">Home</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero container">
          <div>
            <p className="name">Bhoomika Sharma</p>
            <h1>Web Developer</h1>
            <p className="lead">
              I&apos;m a Full-Stack Developer with hands-on experience building
              scalable, high-performance web applications. I specialize in
              React.js, Next.js, Node.js, HTML, CSS and MongoDB, creating modern
              user interfaces with efficient, secure back-end systems.
            </p>
            <a
              className="btn"
              href="https://drive.google.com/file/d/1eWVviIj-7a3j64N1nyyrV_MpBMhZ2jvV/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </section>
        <section id="about" className="container section">
          <h2 style={{ textAlign: "center" }}>About Me</h2>
          <p>
            Hi, I&apos;m Bhoomika Sharma, a passionate Full-Stack Web Developer
            specializing in React.js, Next.js, HTML5, CSS and MongoDB.
            I&apos;ve built multiple real-world projects, e-commerce
            platform, and a food blog website.
          </p>
          <p>
            I focus on clean, maintainable code, performance optimization, and
            seamless user experiences. I continuously upskill and stay aligned
            with modern web development practices.
          </p>
          <h2 style={{ textAlign: "center" }}>Technologies</h2>
          <div className="chips tech-chips">
            {[
              {
                name: "React.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                link: "https://react.dev/"
              },
              {
                name: "Next.js",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                link: "https://nextjs.org/"
              },
              {
                name: "HTML5",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                link: "https://www.geeksforgeeks.org/html/html5/"
              },
              {
                name: "Tailwind CSS",
                icon: "https://cdn.simpleicons.org/tailwindcss",
                link: "https://tailwindcss.com/",
              },
              {
                name: "MongoDB",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
                link: "https://www.mongodb.com/"
              },
              {
                name: "TypeScript",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
                link: "https://www.typescriptlang.org/"
              },
            ].map((item) => (
              <span key={item.name} className="chip">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img
                      src={item.icon}
                      alt={`${item.name} icon`}
                      className="chip-icon"
                    />
                    {item.name}
                  </a>
                ) : (
                  <>
                    <img
                      src={item.icon}
                      alt={`${item.name} icon`}
                      className="chip-icon"
                    />
                    {item.name}
                  </>
                )}
              </span>
            ))}
          </div>
        </section>
        <section id="experience" className="container section">
          <h2 style={{ textAlign: "center" }}>Experience</h2>
          <div className="cards">
            {experiences.map((exp) => (
              <article key={exp.role} className="card">
                <p className="period">{exp.period}</p>
                <h3>{exp.role}</h3>
                <p>{exp.description}</p>
                <div className="chips">
                  {exp.tech.map((t) => (
                    <span key={t} className="chip">
                      {t.toLowerCase().includes("react") ? (
                        <a
                          href="https://react.dev/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t}
                        </a>
                      ) : t.toLowerCase().includes("next") ? (
                        <a
                          href="https://nextjs.org/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t}
                        </a>
                       ): t.toLowerCase().includes("html") ? (
                        <a
                          href="https://www.geeksforgeeks.org/html/html5/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t}
                        </a>
                      ) : t.toLowerCase().includes("css") ? (
                        <a
                          href="https://tailwindcss.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t}
                        </a>
                       ) : t.toLowerCase().includes("typescript") ? (
                        <a
                          href="https://www.typescriptlang.org/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t}
                        </a>
                         ) : t.toLowerCase().includes("mui") ? (
                        <a
                          href="https://mui.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t}
                        </a>
                      ):(
                        t
                      )}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="container section">
          <h2 style={{ textAlign: "center" }}>Projects</h2>
          <div className="cards">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <h3>{project.title}</h3>
                <p className="project-link">{project.subtitle}</p>
                <p>{project.description}</p>
                <div className="chips">
                  {project.tech.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="contact" className="container section">
          <h2 style={{ textAlign: "center" }}>Get In Touch</h2>
          <p className="contact-line">Nainital, Uttarakhand, India</p>
          <p className="contact-line">
            <a className="contact-link" href="tel:+919675808947">
              +91 96758 08947
            </a>
          </p>
          <p className="contact-line">
            <a
              className="contact-link"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bhoomikasharma000@gmail.com."
              target="_blank"
              rel="noreferrer"
            >
              bhoomikasharma000@gmail.com
            </a>
          </p>
          <p className="contact-line contact-links">
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/bhoomika-sharma-a6a700202/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="contact-icon"
              />
            </a>
            <a
              className="contact-link"
              href="https://github.com/bhoomikasharma1"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <img
                src="https://cdn.simpleicons.org/github/b7c0df"
                alt="GitHub"
                className="contact-icon"
              />
            </a>
          </p>
        </section>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
