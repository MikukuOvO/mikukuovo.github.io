import React from "react";
import { educationHistory, experiences } from "../../data";

function TimelineSection({ items, organizationKey, roleKey, logoAltKey, sectionClassName }) {
  return (
    <section className={`panel section-panel ${sectionClassName}`}>
      <div className="timeline">
        {items.map((item) => (
          <article className="timeline-item" key={item.id}>
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-card">
              <div className="timeline-head">
                <div className="timeline-identity">
                  {item.logo ? (
                    <div className="timeline-logo-wrap">
                      <img className="timeline-logo" src={item.logo} alt={`${item[logoAltKey]} logo`} />
                    </div>
                  ) : null}
                  <div className="timeline-role-row">
                    <div className="timeline-role-copy">
                      <h3>{item[roleKey]}</h3>
                      <p className="timeline-org">{item[organizationKey]}</p>
                    </div>
                    {item.badge || item.current ? (
                      <span className={item.badgeVariant ? `inline-badge inline-badge-${item.badgeVariant}` : "inline-badge"}>
                        {item.badge ?? "Current"}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="timeline-period">
                  <span>{item.period}</span>
                  {item.location ? <span>{item.location}</span> : null}
                </div>
              </div>

              {item.highlights?.length ? (
                <ul className="bullet-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <TimelineSection
      items={experiences}
      organizationKey="organization"
      roleKey="role"
      logoAltKey="organization"
      sectionClassName="section-experience"
    />
  );
}

export function EducationSection() {
  return (
    <TimelineSection
      items={educationHistory}
      organizationKey="school"
      roleKey="degree"
      logoAltKey="school"
      sectionClassName="section-education"
    />
  );
}
