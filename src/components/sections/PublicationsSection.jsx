import React from "react";
import { publications } from "../../data";
import { ScholarIcon } from "../icons";

export default function PublicationsSection() {
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
