import React from "react";
import { pinnedItems } from "../../data";

export default function HomeSection() {
  return (
    <section className="panel section-panel section-home">
      <div className="pin-grid">
        {pinnedItems.map((item) =>
          item.kind === "Song" ? (
            <article className="pin-card pin-card-song" key={item.id}>
              <div className="song-player-shell">
                <div className="song-player-stage">
                  <div className="song-player-copy">
                    <span className="song-player-label">Wang Leehom</span>
                    <strong>{item.title}</strong>
                  </div>

                  <div className="song-wave" aria-hidden="true">
                    {Array.from({ length: 14 }).map((_, index) => (
                      <span key={index} />
                    ))}
                  </div>

                  {item.stageLink ? (
                    <a className="song-stage-action" href={item.stageLink} target="_blank" rel="noreferrer">
                      Play on YouTube
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="pin-body pin-body-song">
                <div className="pin-meta">
                  <span className={`pin-kind kind-${item.kind.toLowerCase()}`}>{item.kind}</span>
                </div>
                <p className="song-lyric">"{item.lyric}"</p>
                <p className="song-meta-foot">{item.meta}</p>
              </div>
            </article>
          ) : (
            <article className="pin-card" key={item.id}>
              <img src={item.image} alt={item.alt} />
              <div className="pin-body">
                <div className="pin-meta">
                  <span className={`pin-kind kind-${item.kind.toLowerCase()}`}>{item.kind}</span>
                  <span>{item.meta}</span>
                </div>
                <h3>{item.title}</h3>
                {item.description ? <p>{item.description}</p> : null}
              </div>
            </article>
          ),
        )}
      </div>
    </section>
  );
}
