import { applicationAreas } from "@/lib/site-data";

export default function ApplicationsPage() {
  return (
    <main className="section-container section-spacing lively-section">
      <p className="eyebrow">Applications</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Operational environments where control quality defines outcomes</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Lilaas solutions are built for industries where operator confidence, repeatable response and long service windows are mandatory.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lively-grid">
        {applicationAreas.map((area) => (
          <article key={area.title} className="rounded-xl border border-cyan-700/30 bg-surface p-6">
            <h2 className="text-xl font-semibold">{area.title}</h2>
            <p className="mt-3 text-sm text-slate-300">{area.whatItIs}</p>
            <p className="mt-2 text-sm text-slate-400">Used in {area.usedIn}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
