import React from "react";
import { awards } from "../../data";
import { MedalIcon } from "../icons";

export default function AwardsSection() {
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
