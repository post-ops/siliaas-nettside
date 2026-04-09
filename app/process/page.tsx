import Link from "next/link";

const steps = [
  "Initial Technical Assessment",
  "Requirement Alignment",
  "Engineering Proposal"
];

const outputs = [
  "Technical consultation with engineering scope",
  "System evaluation and integration alignment",
  "Specification path and implementation recommendation"
];

export default function ProcessPage() {
  return (
    <main className="section-container section-spacing">
      <Link href="/" className="text-sm text-slate-400 hover:text-white">
        ← Back to overview
      </Link>
      <p className="eyebrow">Engagement</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">How to Engage</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step} className="rounded-xl border border-slate-800 bg-surface p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Step {i + 1}</p>
            <p className="mt-3 text-lg font-semibold">{step}</p>
          </div>
        ))}
      </div>
      <h2 className="mt-12 text-2xl font-semibold md:text-3xl">What you get</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {outputs.map((item) => (
          <div key={item} className="rounded-xl border border-slate-800 bg-surface p-6">
            {item}
          </div>
        ))}
      </div>
    </main>
  );
}
