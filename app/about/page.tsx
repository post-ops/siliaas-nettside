export default function AboutPage() {
  return (
    <main className="section-container section-spacing">
      <p className="eyebrow">About</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Industrial engineering supplier</h1>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-cyan-700/30 bg-surface p-6">
          <h2 className="text-xl font-semibold">Company profile</h2>
          <p className="mt-3 text-sm text-slate-300">Supplier of control levers, joysticks, thruster control and precision mechanics.</p>
          <p className="mt-2 text-sm text-slate-400">Used in marine, offshore and industrial OEM programs.</p>
        </article>
        <article className="rounded-xl border border-cyan-700/30 bg-surface p-6">
          <h2 className="text-xl font-semibold">Product scope</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>- Control levers and joysticks</li>
            <li>- Thruster control systems</li>
            <li>- Precision mechanical assemblies</li>
          </ul>
        </article>
        <article className="rounded-xl border border-cyan-700/30 bg-surface p-6">
          <h2 className="text-xl font-semibold">Markets</h2>
          <p className="mt-3 text-sm text-slate-300">Maritime, defence, medical and space-related equipment programs.</p>
          <p className="mt-2 text-sm text-slate-400">Used in bridge systems, industrial machinery and specialised platforms.</p>
        </article>
        <article className="rounded-xl border border-cyan-700/30 bg-surface p-6">
          <h2 className="text-xl font-semibold">Engineering focus</h2>
          <p className="mt-3 text-sm text-slate-300">Design for repeatability, load capacity and long service life.</p>
          <p className="mt-2 text-sm text-slate-400">Used in continuous-duty and harsh-environment installations.</p>
        </article>
      </div>
    </main>
  );
}
