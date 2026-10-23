import { Link } from 'react-router-dom';

export default function Placeholder({ title, phase }) {
  return (
    <section className="container-x py-24">
      <p className="eyebrow">Coming in {phase}</p>
      <h1 className="mt-4 font-display text-5xl md:text-6xl">{title}</h1>
      <p className="mt-6 max-w-prose text-muted">This page is routed and ready. Its content is built in {phase}.</p>
      <Link to="/" className="btn-outline mt-8">Back to home</Link>
    </section>
  );
}
