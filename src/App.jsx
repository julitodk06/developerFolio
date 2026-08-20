import {useEffect, useState} from "react";
import {
  capabilities,
  education,
  experience,
  metrics,
  profile,
  projects,
  stack
} from "./data";

const externalLinkProps = {
  target: "_blank",
  rel: "noopener noreferrer"
};

function getInitialTheme() {
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  return window.matchMedia?.("(prefers-color-scheme: light)")?.matches
    ? "light"
    : "dark";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const assetUrl = path => `${import.meta.env.BASE_URL}${path}`;

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Julio Villalobo - home">
          <span className="brand-mark" aria-hidden="true">
            JV
          </span>
          <span>
            Julio Villalobo
            <small>AI Transformation & Product</small>
          </span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            onClick={() =>
              setTheme(current => (current === "dark" ? "light" : "dark"))
            }
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" aria-hidden="true" /> Open to
              international opportunities
            </p>
            <h1>
              I turn complex AI initiatives into <em>operational products.</em>
            </h1>
            <p className="hero-lead">
              AI Transformation and Product Leader connecting strategy,
              architecture, security and staged delivery across enterprise
              automation, CRM platforms and RWA infrastructure.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work
              </a>
              <a
                className="button button-secondary"
                href={assetUrl("resume.pdf")}
                download="Julio_Antonio_Villalobo_Executive_Resume.pdf"
              >
                Download resume
              </a>
            </div>
            <div className="hero-meta" aria-label="Professional details">
              <span>{profile.location}</span>
              <span>Spanish: Native</span>
              <span>English: Professional working proficiency</span>
            </div>
          </div>

          <aside className="operating-model" aria-label="Operating model">
            <p className="panel-label">Operating model</p>
            <ol>
              <li>
                <span>01</span>
                <div>
                  <strong>Frame the outcome</strong>
                  <p>Business value, constraints and accountable metrics.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <strong>Design the system</strong>
                  <p>
                    Boundaries, security, data, integrations and human control.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <strong>Ship in evidence</strong>
                  <p>Milestones, QA, observability and production readiness.</p>
                </div>
              </li>
            </ol>
            <div className="panel-footer">
              <span>Product</span>
              <span>Architecture</span>
              <span>Delivery</span>
            </div>
          </aside>
        </section>

        <section className="metrics" aria-labelledby="impact-title">
          <div className="section-intro compact">
            <p className="eyebrow">Selected impact</p>
            <h2 id="impact-title">Evidence over buzzwords.</h2>
          </div>
          <div className="metric-grid">
            {metrics.map(metric => (
              <article className="metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <h3>{metric.label}</h3>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="capabilities-title">
          <div className="section-intro">
            <p className="eyebrow">Leadership + technical depth</p>
            <h2 id="capabilities-title">
              Built for the space between boardroom and codebase.
            </h2>
            <p>
              I work where strategy has to survive contact with architecture,
              security, users and delivery constraints.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map(capability => (
              <article className="capability-card" key={capability.number}>
                <span className="card-number">{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <ul>
                  {capability.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section projects-section"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-intro">
            <p className="eyebrow">Selected systems</p>
            <h2 id="work-title">Architecture with a business reason.</h2>
            <p>
              Core repositories remain private. These case studies expose
              verified scope and architectural signals without publishing
              credentials, client data or proprietary logic.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-visual">
                  <span className="project-index">0{index + 1}</span>
                  <img src={assetUrl(project.image)} alt="" />
                  <span className="project-status">{project.status}</span>
                </div>
                <div className="project-content">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="evidence-list">
                    {project.evidence.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div
                    className="tag-list"
                    aria-label={`${project.name} technology stack`}
                  >
                    {project.stack.map(item => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  {project.links.length > 0 && (
                    <div className="project-links">
                      {project.links.map(link => (
                        <a
                          href={link.url}
                          {...externalLinkProps}
                          key={link.label}
                        >
                          {link.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-intro">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">
              Cross-functional delivery, grounded in systems.
            </h2>
          </div>
          <div className="timeline">
            {experience.map(item => (
              <article className="timeline-item" key={item.organization}>
                <p className="timeline-period">{item.period}</p>
                <div>
                  <p className="timeline-org">{item.organization}</p>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                  <ul>
                    {item.outcomes.map(outcome => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section foundation-section"
          aria-labelledby="foundation-title"
        >
          <div className="section-intro">
            <p className="eyebrow">Technical foundation</p>
            <h2 id="foundation-title">
              A stack chosen around the system, not the trend.
            </h2>
          </div>
          <div className="foundation-grid">
            <div className="stack-panel">
              <h3>Core technology</h3>
              <div className="tag-list large">
                {stack.map(item => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="education-panel">
              <h3>Education & development</h3>
              {education.map(item => (
                <article key={`${item.institution}-${item.program}`}>
                  <strong>{item.program}</strong>
                  <p>{item.institution}</p>
                  <span>{item.date}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="eyebrow">Available for the right challenge</p>
            <h2 id="contact-title">
              Let&apos;s build AI products that operations can trust.
            </h2>
            <p>
              Open to remote and international opportunities, international
              travel and relocation.
            </p>
          </div>
          <div className="contact-links">
            <a className="button button-light" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a href={profile.links.linkedin} {...externalLinkProps}>
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href={profile.links.github} {...externalLinkProps}>
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Julio Antonio Villalobo</p>
        <p>AI Transformation · Product · Architecture · Delivery</p>
      </footer>
    </>
  );
}

export default App;
