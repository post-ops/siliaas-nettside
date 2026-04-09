import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { ScrollDepthTracker } from "@/components/scroll-depth-tracker";
import { StickyCTA } from "@/components/sticky-cta";
import { TrackedAnchor } from "@/components/tracked-anchor";

const products = [
  {
    title: "Control Levers",
    image: "/images/lilaas-lever.jpg",
    summary: "Primary propulsion and maneuvering control",
    specs: ">10M cycles • IP67 • Redundant sensing",
    href: "/engineering"
  },
  {
    title: "Joysticks",
    image: "/images/lilaas-joystick.jpg",
    summary: "Precision command input for offshore handling",
    specs: "Hall sensors • Dual channel • High repeatability",
    href: "/applications"
  },
  {
    title: "Integrated Consoles",
    image: "/images/lilaas-console.jpg",
    summary: "Operator console for multi-position control environments",
    specs: "Modular layout • System integration • Lifecycle continuity",
    href: "/engineering"
  }
];

const deepLinks = [
  { href: "/engineering", title: "Engineering Depth", text: "System architecture, metrics and compliance mindset." },
  { href: "/applications", title: "Applications", text: "Industries, deployment contexts and operational use." },
  { href: "/cases", title: "Case Studies", text: "Real deployments with problem-solution-outcome structure." },
  { href: "/process", title: "Engagement Process", text: "How to engage, what you get and decision path." }
];

export function HomeLanding() {
  return (
    <main className="overflow-x-hidden">
      <ScrollDepthTracker />

      <section className="section-container section-spacing">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow">Mission-Critical Control Engineering</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">Control systems for mission-critical environments</h1>
            <p className="max-w-2xl text-lg text-slate-300">Zero failure tolerance. Built for complex system integration.</p>
            <p className="text-sm font-medium text-slate-200">Failure is not an option in these environments.</p>
            <div className="flex flex-wrap gap-4">
              <TrackedAnchor
                href="#contact"
                className="w-full md:w-auto text-center rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
                location="hero"
                label="Request Initial Technical Assessment"
              >
                Request Initial Technical Assessment
              </TrackedAnchor>
              <a
                href="#products"
                className="w-full md:w-auto text-center rounded-md border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-500"
              >
                View System Capabilities
              </a>
            </div>
            <p className="mt-2 text-xs text-green-400">Typically scheduled within 1-2 business days</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-200">
              <span className="rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1 shadow-sm shadow-blue-500/20">
                ISO 9001
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1 shadow-sm shadow-blue-500/20">
                DNV-aligned
              </span>
              <span className="rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1 shadow-sm shadow-blue-500/20">
                Global OEM programs
              </span>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-surface p-6 shadow-card">
            <Image
              src="/images/bridge-control.jpg"
              alt="Bridge control system"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="w-full rounded-xl border border-slate-700 object-cover"
            />
            <p className="mt-4 text-xs text-slate-400">
              Bridge control environment in production use with integrated thruster and propulsion control.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Why It Matters</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Failure risk is operational risk</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-slate-800 bg-surface p-6 transition hover:scale-[1.02] hover:border-slate-500">
            <h3 className="text-xl font-semibold">Predictable performance</h3>
            <p className="mt-3 text-slate-300">Stable control response reduces operator error in high-pressure operations.</p>
          </article>
          <article className="rounded-xl border border-slate-800 bg-surface p-6 transition hover:scale-[1.02] hover:border-slate-500">
            <h3 className="text-xl font-semibold">Lower uncertainty</h3>
            <p className="mt-3 text-slate-300">Engineering-first integration minimizes commissioning and downtime risk.</p>
          </article>
          <article className="rounded-xl border border-slate-800 bg-surface p-6 transition hover:scale-[1.02] hover:border-slate-500">
            <h3 className="text-xl font-semibold">Lifecycle confidence</h3>
            <p className="mt-3 text-slate-300">Built for long lifecycle programs with stable supply and continuity.</p>
          </article>
        </div>
        <div className="mt-10">
          <TrackedAnchor
            href="#contact"
            className="inline-block w-full md:w-auto text-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500"
            location="why"
            label="Discuss your system requirements"
          >
            Discuss your system requirements
          </TrackedAnchor>
        </div>
      </section>

      <section id="products" className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Products</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Core control system capabilities</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="rounded-xl border border-slate-700 bg-surface p-6 transition hover:scale-[1.02] hover:border-slate-500">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <Image src={product.image} alt={product.title} width={600} height={400} className="mt-4 rounded-md border border-slate-700" />
              <p className="mt-3 text-slate-300">{product.summary}</p>
              <p className="mt-2 text-sm text-slate-400">{product.specs}</p>
              <Link href={product.href} className="mt-4 inline-block text-sm text-blue-300 hover:text-blue-200">
                View technical details
              </Link>
            </article>
          ))}
        </div>
        <TrackedAnchor
          href="#contact"
          className="mt-8 inline-block w-full md:w-auto text-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500"
          location="products"
          label="Discuss your system requirements"
        >
          Discuss your system requirements
        </TrackedAnchor>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Case Preview</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Real-world deployment evidence</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-slate-700 bg-surface p-6 transition hover:scale-[1.02] hover:border-slate-500">
            <Image src="/images/thruster-system.jpg" alt="Thruster system in operation" width={800} height={500} className="w-full rounded-md object-cover" />
            <p className="mt-3 text-slate-300">Reduced docking operator variance through calibrated response and redundant control paths.</p>
          </article>
          <article className="rounded-xl border border-slate-700 bg-surface p-6 transition hover:scale-[1.02] hover:border-slate-500">
            <Image src="/images/offshore-control.jpg" alt="Offshore control environment" width={800} height={500} className="w-full rounded-md object-cover" />
            <p className="mt-3 text-slate-300">Maintained predictable performance in high-duty offshore operations.</p>
          </article>
        </div>
        <TrackedAnchor
          href="#contact"
          className="mt-8 inline-block w-full md:w-auto text-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500"
          location="final"
          label="Get initial technical direction"
        >
          Get initial technical direction
        </TrackedAnchor>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Explore Details</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Dive deeper by topic</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {deepLinks.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-xl border border-slate-700 bg-surface p-6 transition hover:border-slate-500">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-slate-300">{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="section-container section-spacing relative border-t border-slate-800">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12">
          <p className="eyebrow">Enterprise Partnership</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold md:text-5xl">Start a Technical Dialogue</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <ContactForm />
            <div className="space-y-5 text-slate-300">
              <p className="text-lg font-medium text-white">Contact Information</p>
              <a
                href="https://www.google.com/maps?q=Kongeveien+75,+3188+Horten"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-300"
              >
                Kongeveien 75
                <br />
                3188 Horten
              </a>
              <p className="text-sm text-slate-400">Phone hours: Mon-Fri 08:00-16:00</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[calc(80px+env(safe-area-inset-bottom))] md:hidden" />
      <StickyCTA />
    </main>
  );
}
