import { PremiumImage } from "@/components/premium-image";
import { applicationAreas } from "@/lib/site-data";

export default function ApplicationsPage() {
  return (
    <main className="section-container section-spacing">
      <p className="eyebrow">Applications</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Operational environments</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {applicationAreas.map((area) => (
          <article key={area.title} className="rounded-xl border border-cyan-700/30 bg-surface p-6">
            <PremiumImage src={area.image} alt={`${area.title} application`} variant="section" />
            <h2 className="text-xl font-semibold">{area.title}</h2>
            <p className="mt-3 text-sm text-slate-300">{area.whatItIs}</p>
            <p className="mt-2 text-sm text-slate-400">Used in {area.usedIn}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
