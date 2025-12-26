import React from "react";
import experiences from "../../data/experiences";
import ExperienceCard from "./ExperienceCard";

export default function Experiences() {
  return (
    <section id="experiences" className="mx-auto max-w-6xl px-4 pb-10">
      <div className="mb-4 flex items-center gap-2">
        <h2 className="text-xl font-semibold tracking-tight">Expériences professionnelles</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((e) => (
          <ExperienceCard key={e.id} item={e} />
        ))}
      </div>
    </section>
  );
}