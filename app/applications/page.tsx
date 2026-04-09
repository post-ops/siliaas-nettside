import Link from "next/link";

export default function ApplicationsPage() {
  return (
    <main className="section-container section-spacing">
      <Link href="/" className="text-sm text-slate-400 hover:text-white">
        ← Back to overview
      </Link>
      <p className="eyebrow">Applications</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Industries and Deployment Environments</h1>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-surface p-6">Maritime bridge and deck control operations</div>
        <div className="rounded-xl border border-slate-800 bg-surface p-6">Offshore and heavy-duty vessel environments</div>
        <div className="rounded-xl border border-slate-800 bg-surface p-6">Defense platforms with mission-critical continuity requirements</div>
        <div className="rounded-xl border border-slate-800 bg-surface p-6">Specialized industrial systems with complex integration demands</div>
      </div>
    </main>
  );
}
