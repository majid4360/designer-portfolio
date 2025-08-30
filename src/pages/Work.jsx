// src/pages/Work.jsx
import projects from "../data/projects.json";
import { Link } from "react-router-dom";
export default function Work() {
  return (
    <section className="grid gap-6 sm:grid-cols-2">
      {projects.map(p => (
        <Link key={p.slug} to={`/work/${p.slug}`} className="block">
          <img src={p.cover} alt={`${p.title} cover`} className="rounded" />
          <h3 className="mt-2 text-xl">{p.title}</h3>
          <p className="text-sm text-gray-600">{p.summary}</p>
        </Link>
      ))}
    </section>
  );
}
