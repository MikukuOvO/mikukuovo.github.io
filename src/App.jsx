import React, { useState } from "react";
import {
  awards,
  educationHistory,
  experiences,
  pinnedItems,
  profile,
  publications,
} from "./data";
import resumePdf from "./Felix_Yu_Resume.pdf";

const sections = ["Home", "Education", "Experience", "Awards", "Publications", "CV"];

function SectionHeader({ eyebrow, title, description }) {
  return (
    <header className="section-heading">
      <div>
        <p className="section-kicker">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p className="section-description">{description}</p>
    </header>
  );
}

function HomeSection() {
  return (
    <section className="panel section-panel section-home">
      <div className="pin-grid">
        {pinnedItems.map((item) => (
          <article className="pin-card" key={item.id}>
            <img src={item.image} alt={item.alt} />
            <div className="pin-body">
              <div className="pin-meta">
                <span className={`pin-kind kind-${item.kind.toLowerCase()}`}>{item.kind}</span>
                <span>{item.meta}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="panel section-panel section-experience">
      <div className="timeline">
        {experiences.map((item) => (
          <article className="timeline-item" key={item.id}>
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-head">
                <div className="timeline-identity">
                  {item.logo ? (
                    <div className="timeline-logo-wrap">
                      <img className="timeline-logo" src={item.logo} alt={`${item.organization} logo`} />
                    </div>
                  ) : null}
                  <div className="timeline-role-row">
                    <div>
                      <h3>{item.role}</h3>
                      <p className="timeline-org">{item.organization}</p>
                    </div>
                    {item.current ? <span className="inline-badge">Current</span> : null}
                  </div>
                </div>

                <div className="timeline-period">
                  <span>{item.period}</span>
                  {item.location ? <span>{item.location}</span> : null}
                </div>
              </div>

              <p className="timeline-summary">{item.summary}</p>

              <ul className="bullet-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="panel section-panel section-education">
      <div className="timeline">
        {educationHistory.map((item) => (
          <article className="timeline-item" key={item.id}>
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-head">
                <div className="timeline-identity">
                  {item.logo ? (
                    <div className="timeline-logo-wrap">
                      <img className="timeline-logo" src={item.logo} alt={`${item.school} logo`} />
                    </div>
                  ) : null}
                  <div className="timeline-role-row">
                    <div>
                      <h3>{item.degree}</h3>
                      <p className="timeline-org">{item.school}</p>
                    </div>
                    {item.current ? <span className="inline-badge">Current</span> : null}
                  </div>
                </div>

                <div className="timeline-period">
                  <span>{item.period}</span>
                  {item.location ? <span>{item.location}</span> : null}
                </div>
              </div>

              <p className="timeline-summary">{item.summary}</p>

              <ul className="bullet-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function MedalIcon({ tier }) {
  return (
    <svg
      className={`medal-icon medal-${tier}`}
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <path d="M18 6h10l6 15h-8L18 6Z" />
      <path d="M36 6h10l-8 15h-8l6-15Z" />
      <circle cx="32" cy="38" r="16" />
      <circle className="medal-core" cx="32" cy="38" r="9" />
    </svg>
  );
}

function HeroStatIcon({ kind }) {
  if (kind === "location") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21s-5.5-5.6-5.5-10A5.5 5.5 0 1 1 17.5 11C17.5 15.4 12 21 12 21Z" />
        <circle cx="12" cy="11" r="2.5" />
      </svg>
    );
  }

  if (kind === "school") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 3 8.5 12 13l7-3.5V15h2V8.5L12 4Z" />
        <path d="M7 12.5V16c0 1.7 2.3 3 5 3s5-1.3 5-3v-3.5L12 15l-5-2.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v4.1M12 17.4v4.1M21.5 12h-4.1M6.6 12H2.5M18.7 5.3l-2.9 2.9M8.2 15.8l-2.9 2.9M18.7 18.7l-2.9-2.9M8.2 8.2 5.3 5.3" />
    </svg>
  );
}

function ScholarIcon() {
  return (
    <svg className="scholar-icon" viewBox="0 0 48 48" aria-hidden="true">
      <path d="M24 8 6 16l18 8 14-6.2V28h4V16L24 8Z" fill="#4285F4" />
      <path d="M14 25.5V33c0 4.2 5 7 10 7s10-2.8 10-7v-7.5L24 30l-10-4.5Z" fill="#34A853" />
      <circle cx="24" cy="30" r="5.5" fill="#FBBC05" />
      <circle cx="24" cy="30" r="2.4" fill="#EA4335" />
    </svg>
  );
}

function PdfFileIcon() {
  return (
    <svg className="cv-file-icon-svg" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M9 4.5h9.2l4.8 4.8V27a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 7 27V7A2.5 2.5 0 0 1 9.5 4.5Z" fill="#A142F4" />
      <path d="M18.2 4.5v4.1a1 1 0 0 0 1 1h3.8" fill="#D7AEFB" />
      <path d="M11.2 14.2h8.8M11.2 18h8.8M11.2 21.8h6.2" stroke="#ffffff" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  );
}

function QuickLinkIcon({ kind }) {
  if (kind === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.8 8.8H3.7V20h3.1V8.8Zm.2-3.5a1.8 1.8 0 1 0-3.6 0 1.8 1.8 0 0 0 3.6 0ZM20.3 13.2c0-3.1-1.7-4.6-4-4.6-1.8 0-2.6 1-3 1.7V8.8h-3V20h3v-6c0-1.6.3-3.2 2.2-3.2s1.9 1.8 1.9 3.3V20h3V13.2Z" />
      </svg>
    );
  }

  if (kind === "github") {
    return (
      <svg viewBox="0 0 16 16" aria-hidden="true">
        <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.54 7.54 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
      </svg>
    );
  }

  if (kind === "email") {
    return (
      <img
        src="https://storage.googleapis.com/gweb-workspace-assets/uploads/7uffzv9dk4sn-2ANudyZddMUfBdOX8YWDbe-8da52413e8fe627a74e653f02de3e001-Gmail.svg"
        alt=""
      />
    );
  }

  if (kind === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.1 4.8c-.4 0-.7.2-.9.6l-1 2.2a2 2 0 0 0 .1 1.8 18 18 0 0 0 8.2 8.2 2 2 0 0 0 1.8.1l2.2-1a1 1 0 0 0 .6-.9v-2.1a1 1 0 0 0-.9-1l-3-.4a1 1 0 0 0-.9.3l-1.1 1.1a13.2 13.2 0 0 1-3.9-3.9l1.1-1.1a1 1 0 0 0 .3-.9l-.4-3a1 1 0 0 0-1-.9H7.1Z" />
      </svg>
    );
  }

  if (kind === "scholar") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 3 8l9 4 7-3.1V14h2V8L12 4Z" />
        <path d="M7 12.8V16c0 1.8 2.5 3 5 3s5-1.2 5-3v-3.2L12 15l-5-2.2Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 13h6M9 17h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function AwardsSection() {
  return (
    <section className="panel section-panel section-awards">
      <div className="card-grid">
        {awards.map((item) => (
          <article className="info-card award-card" key={item.id}>
            <div className="award-medal-wrap">
              <MedalIcon tier={item.tier} />
            </div>
            <h3>{item.title}</h3>
            <p className="award-rank">{item.issuer}</p>
            <p className="award-date">{item.year}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PublicationsSection() {
  return (
    <section className="panel section-panel section-publications">
      <div className="publications-toolbar">
        <a
          className="scholar-link"
          href="https://scholar.google.com/citations?user=IB6_xVAAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
        >
          <ScholarIcon />
          <span>Google Scholar</span>
        </a>
      </div>

      <div className="card-grid">
        {publications.map((item) => (
          <article className="info-card publication-card" key={item.id}>
            <div className="card-meta">
              <span>{item.venue}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="publication-authors">{item.authors}</p>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CvSection() {
  return (
    <section className="panel cv-panel">
      <div className="cv-viewer">
        <div className="cv-toolbar">
          <div className="cv-file">
            <div className="cv-file-icon-wrap">
              <PdfFileIcon />
            </div>
            <div className="cv-file-meta">
              <span className="cv-file-label">Resume PDF</span>
              <strong>Fenglin Yu CV</strong>
            </div>
          </div>

          <div className="cv-actions">
            <a className="cv-action" href={resumePdf} target="_blank" rel="noreferrer">
              Open in new tab
            </a>
            <a className="cv-action cv-action-primary" href={resumePdf} download>
              Download PDF
            </a>
          </div>
        </div>

        <div className="cv-paper-frame">
          <iframe className="cv-embed" src={resumePdf} title="Fenglin Yu CV" />
        </div>
      </div>
    </section>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const quickLinks = [
    {
      label: "LinkedIn",
      value: "fenglin-yu-910031290",
      href: "https://www.linkedin.com/in/fenglin-yu-910031290/",
      kind: "linkedin",
      external: true,
    },
    {
      label: "GitHub",
      value: "github.com/MikukuOvO",
      href: "https://github.com/MikukuOvO",
      kind: "github",
      external: true,
    },
    {
      label: "Email",
      value: "mikukuovo@gmail.com",
      href: "mailto:mikukuovo@gmail.com",
      kind: "email",
    },
    {
      label: "Phone",
      value: "(530) 979-3651",
      href: "tel:+15309793651",
      kind: "phone",
    },
  ];

  let sectionContent = <HomeSection />;

  if (activeSection === "Education") {
    sectionContent = <EducationSection />;
  } else if (activeSection === "Experience") {
    sectionContent = <ExperienceSection />;
  } else if (activeSection === "Awards") {
    sectionContent = <AwardsSection />;
  } else if (activeSection === "Publications") {
    sectionContent = <PublicationsSection />;
  } else if (activeSection === "CV") {
    sectionContent = <CvSection />;
  }

  return (
    <div className="page-shell">
      <div className="page-noise" aria-hidden="true" />

      <main className="layout-shell">
        <section className="profile-hero">
          <div className="hero-banner" aria-hidden="true" />

          <div className="hero-body">
            <div className="portrait-frame">
              <img src={profile.photo} alt={`${profile.name} profile portrait placeholder`} />
            </div>

            <div className="hero-intro">
              <h1>{profile.name}</h1>
            </div>
          </div>

          <div className="metric-row">
            {profile.stats.map((item) => (
              <article className="metric-card" key={item.label}>
                <div className="metric-card-head">
                  <div className={`metric-icon metric-icon-${item.icon}`}>
                    <HeroStatIcon kind={item.icon} />
                  </div>
                  <span className="metric-card-label">{item.label}</span>
                </div>
                <strong className="metric-card-value">{item.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <nav className="section-tabs" role="tablist" aria-label="Profile sections">
          {sections.map((section) => (
            <button
              key={section}
              className={section === activeSection ? "tab-button active" : "tab-button"}
              type="button"
              role="tab"
              aria-selected={section === activeSection}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          ))}
        </nav>

        <section className="workspace" id="main-content">
          <aside className="sidebar">
            <div className="panel sidebar-panel">
              <p className="section-kicker">🎉 News</p>
              <div className="snapshot-list">
                {profile.snapshot.map((item) => (
                  <article className="snapshot-item" key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </article>
                ))}
              </div>
            </div>

            <div className="panel sidebar-panel">
              <p className="section-kicker">Quick Links</p>
              <div className="quick-links">
                {quickLinks.map((item) => (
                  <a
                    className="quick-link"
                    href={item.href}
                    key={item.label}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                  >
                    <div className={`quick-link-icon quick-link-icon-${item.kind}`}>
                      <QuickLinkIcon kind={item.kind} />
                    </div>
                    <div className="quick-link-copy">
                      <span className="quick-link-label">{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                    <span className="quick-link-arrow" aria-hidden="true">
                      <svg viewBox="0 0 20 20">
                        <path
                          d="M7 4.5 12.5 10 7 15.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="section-view">{sectionContent}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
