import React, { useState } from "react";
import { profile } from "./data";
import { HeroStatIcon, QuickLinkIcon } from "./components/icons";
import HomeSection from "./components/sections/HomeSection";
import { EducationSection, ExperienceSection } from "./components/sections/TimelineSections";
import AwardsSection from "./components/sections/AwardsSection";
import PublicationsSection from "./components/sections/PublicationsSection";
import CvSection from "./components/sections/CvSection";

const sections = ["Home", "Education", "Experience", "Awards", "Publications", "CV"];

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

function ProfileHero() {
  return (
    <section className="profile-hero">
      <div className="hero-banner" aria-hidden="true" />

      <div className="hero-body">
        <div className="portrait-frame">
          <img src={profile.photo} alt={`${profile.name} profile portrait`} />
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
  );
}

function Sidebar() {
  return (
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
  );
}

function renderSection(activeSection) {
  if (activeSection === "Education") return <EducationSection />;
  if (activeSection === "Experience") return <ExperienceSection />;
  if (activeSection === "Awards") return <AwardsSection />;
  if (activeSection === "Publications") return <PublicationsSection />;
  if (activeSection === "CV") return <CvSection />;
  return <HomeSection />;
}

function App() {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <div className="page-shell">
      <div className="page-noise" aria-hidden="true" />

      <main className="layout-shell">
        <ProfileHero />

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
          <Sidebar />
          <div className="section-view">{renderSection(activeSection)}</div>
        </section>
      </main>
    </div>
  );
}

export default App;
