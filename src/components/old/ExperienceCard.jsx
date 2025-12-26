import React from "react";
import "../components/experience.css"; // charge le CSS commun

export default function ExperienceCard({ item }) {
  return (
    <article className="exp-card" aria-labelledby={`exp-title-${item.id}`}>
      <header className="exp-header">
        <div>
          <h3 id={`exp-title-${item.id}`} className="exp-title">{item.title}</h3>
          <div className="company">{item.company}</div>
        </div>
        <div className="period" aria-hidden="true">{item.period}</div>
      </header>

      {item.summary && <p className="summary">{item.summary}</p>}

      {item.highlights && (
        <ul className="highlights">
          {item.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}

      {item.tech && <div className="tech">Tech : {item.tech.join(" · ")}</div>}
    </article>
  );
}