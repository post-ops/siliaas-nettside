import { StickyCTA } from "@/components/sticky-cta";
import { TrackedAnchor } from "@/components/tracked-anchor";
import { TrackedEventAnchor } from "@/components/tracked-event-anchor";
import { ContactForm } from "@/components/contact-form";
import { ScrollDepthTracker } from "@/components/scroll-depth-tracker";
import Image from "next/image";

const trustItems = ["ISO 9001 Certified", "DNV-Class Process Alignment", "Trusted by Global OEM Programs"];

const services = [
  {
    title: "Control Systems",
    text: "Control levers, joysticks and complete control interfaces engineered for deterministic response in critical operations."
  },
  {
    title: "Precision Mechanics",
    text: "Tight-tolerance mechanics designed for stable force curves, repeatable input and long operational life."
  },
  {
    title: "Custom Engineering",
    text: "Co-engineered solutions adapted to your platform, standards and environmental constraints."
  }
];

const industries = [
  {
    title: "Maritime",
    text: "Bridge and deck control solutions for commercial ships, offshore support and specialized vessels."
  },
  {
    title: "Defense",
    text: "Robust human-machine interfaces engineered for reliability in high-demand tactical operations."
  },
  {
    title: "Medical",
    text: "Precise and smooth control systems for advanced medical devices requiring stable, repeatable input."
  },
  {
    title: "Space",
    text: "Compact and dependable control components adapted for extreme operating constraints."
  }
];

const products = [
  {
    title: "Control Levers",
    image: "/images/lilaas-lever.jpg",
    spec: "Up to 10M+ actuation cycles, IP67 sealing options, configurable detents and redundant sensor architecture.",
    useCase: "Typical use case: primary propulsion and maneuvering control in bridge systems.",
    integration: "Integration context: connected to redundant vessel control chains with monitored signal paths.",
    systemRole: "System role: deterministic operator input layer in high-consequence control loops."
  },
  {
    title: "Joysticks",
    image: "/images/lilaas-joystick.jpg",
    spec: "Contactless Hall sensing, dual-channel output, IP65/IP67 configurations and high-precision axis linearity.",
    useCase: "Typical use case: precision motion command in offshore and industrial handling operations.",
    integration: "Integration context: integrated with PLC/drive systems and failsafe supervisory logic.",
    systemRole: "System role: high-fidelity command interface for predictable directional control."
  },
  {
    title: "Integrated Consoles",
    image: "/images/lilaas-console.jpg",
    spec: "Modular operator stations with EMC-conscious layout, custom HMI geometry and integrated control electronics.",
    useCase: "Typical use case: centralized multi-function operator station for complex bridge environments.",
    integration: "Integration context: coordinated with navigation, automation and alarm subsystems.",
    systemRole: "System role: structured control layer that aligns human input with system-level behavior."
  }
];

const strengths = ["Precision Engineering", "Field-Proven Reliability", "Custom-Built Solutions", "Norwegian Heritage"];

const steps = ["Idea & Requirements", "Engineering & Prototyping", "Production & Verification", "Delivery & Lifecycle Support"];

const logoItems = ["DNV", "ISO", "Global OEM", "Mission-Critical Fleet"];

const whyItMatters = [
  {
    title: "Operational Risk Is Expensive",
    text: "A control failure during maneuvering, docking or tactical operation can shut down assets and trigger costly incidents."
  },
  {
    title: "Downtime Compounds Fast",
    text: "Unplanned service windows impact schedules, crew allocation and contractual commitments across the full operation chain."
  },
  {
    title: "Precision Protects Outcomes",
    text: "Stable, repeatable control response reduces operator error and protects both personnel safety and system performance."
  }
];

const comparisonRows = [
  {
    generic: "Catalog-first components with limited adaptation",
    lilaas: "Application-engineered solutions tuned to duty profile and environment"
  },
  {
    generic: "Variable quality across production batches",
    lilaas: "Controlled manufacturing with verification-focused process discipline"
  },
  {
    generic: "Minimal lifecycle support after delivery",
    lilaas: "Engineering collaboration from requirement to lifecycle continuity"
  }
];

const engineeringDepth = [
  {
    title: "Hardware Architecture",
    text: "Modular control hardware designed for integration into larger bridge, vehicle and platform control systems with deterministic signal behavior."
  },
  {
    title: "Sensor & Redundancy Strategy",
    text: "Contactless Hall sensing, dual-channel paths and fault-aware signal handling to reduce failure risk in critical operator inputs."
  },
  {
    title: "Mechanical Lifecycle Engineering",
    text: "Load path design, material selection and endurance validation focused on predictable performance through long lifecycle programs."
  },
  {
    title: "Compliance-Ready Integration",
    text: "Engineering documentation and verification mindset aligned with class, quality and customer-specific compliance requirements."
  }
];

const performanceMetrics = [
  { label: "Actuation lifecycle", value: ">10M cycles", detail: "Configured by product family and duty profile" },
  { label: "Ingress protection", value: "Up to IP67", detail: "Sealing options for harsh environments" },
  { label: "Temperature range", value: "-40C to +85C", detail: "Configuration-dependent operational envelope" },
  { label: "Signal redundancy", value: "Dual-channel", detail: "Redundant output paths for critical signals" },
  { label: "Response stability", value: "High repeatability", detail: "Built to minimize operational uncertainty" },
  { label: "Reliability mindset", value: "MTBF-oriented", detail: "Design choices prioritizing predictable uptime" }
];

const deployedEnvironments = [
  "Ship bridges and integrated navigation control stations",
  "Offshore support and heavy-duty vessel control interfaces",
  "Defense platforms with strict reliability and continuity demands",
  "Specialized industrial control systems with complex integration requirements"
];

const engineeringSnapshot = [
  "Lifecycle-first engineering for long-term operational programs",
  "Redundancy philosophy focused on graceful behavior under fault conditions",
  "Integration capability across PLC, drive and supervisory control architectures",
  "Compliance mindset aligned with class requirements and customer verification plans"
];

const scaleSignals = [
  "Supporting long lifecycle programs across global fleets and industrial assets",
  "Engineering continuity from initial integration to long-term platform maintenance",
  "Stable supply model designed for enterprise procurement and production planning"
];

const engageSteps = [
  {
    title: "Initial Technical Assessment",
    text: "We review your application, constraints and system requirements to identify key engineering considerations."
  },
  {
    title: "Requirement Alignment",
    text: "We define integration points, performance expectations and compliance needs together with your team."
  },
  {
    title: "Engineering Proposal",
    text: "You receive a structured technical direction and specification path tailored to your system."
  }
];

const engagementOutputs = [
  "Technical consultation with relevant engineering scope",
  "System evaluation against operational and integration constraints",
  "Specification alignment and documentation path",
  "Engineering proposal with next-step decision guidance"
];

const audience = ["CTOs defining platform direction", "Technical leads responsible for system reliability", "Procurement teams managing long lifecycle programs"];

function VisualSystemBlock({
  title,
  label,
  detail,
  src
}: {
  title: string;
  label: string;
  detail: string;
  src: string;
}) {
  return (
    <div className="rounded-xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-card">
      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <div className="mt-3 rounded-lg border border-slate-700 bg-slate-900/80 p-5">
        <p className="text-sm font-medium text-white">{title}</p>
        <div className="mt-4 rounded-lg border border-slate-700 bg-slate-900/80 p-3">
          <Image src={src} alt={title} width={800} height={500} className="w-full rounded-md object-cover" />
        </div>
        <p className="mt-4 text-xs text-slate-400">{detail}</p>
      </div>
    </div>
  );
}

export function HomeSections() {
  return (
    <main className="overflow-x-hidden">
      <ScrollDepthTracker />
      <section className="section-container section-spacing">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="eyebrow">Mission-Critical Control Engineering</p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Control Systems Built for Zero Failure Environments
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Lilaas delivers precision control levers, joysticks and engineered control systems for maritime, defense,
              medical and space platforms where reliability, repeatability and control accuracy are non-negotiable.
              Built for integration into complex systems and designed for long lifecycle programs.
            </p>
            <div className="flex flex-wrap gap-4">
              <TrackedAnchor
                href="#contact"
                className="rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
                location="hero"
                label="Request Initial Technical Assessment"
              >
                Request Initial Technical Assessment
              </TrackedAnchor>
              <a
                href="#products"
                className="rounded-md border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-500"
              >
                View System Capabilities
              </a>
            </div>
            <p className="mt-2 text-xs text-green-400">Typically scheduled within 1-2 business days</p>
            <div className="flex flex-wrap gap-3 pt-2 text-xs text-slate-300">
              <span className="rounded-full border border-slate-700 px-3 py-1">Trusted globally</span>
              <span className="rounded-full border border-slate-700 px-3 py-1">Engineering team available</span>
              <span className="rounded-full border border-slate-700 px-3 py-1">Response within 24h</span>
            </div>
            <div className="pt-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Trusted by certification bodies and OEMs</p>
              <div className="mt-3 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {logoItems.map((logo) => (
                  <div
                    key={logo}
                    className="rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2 text-center text-xs text-slate-300"
                  >
                    {logo}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-700 bg-surface p-8 shadow-card">
            <p className="text-sm text-slate-400">Engineered for mission-critical duty</p>
            <div className="mt-4">
              <Image
                src="/images/bridge-control.jpg"
                alt="Bridge control system"
                width={1200}
                height={800}
                priority
                className="w-full rounded-xl border border-slate-700 object-cover"
              />
            </div>
            <div className="mt-5 space-y-5">
              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                <p className="text-sm text-slate-300">IP-rated hardware, maritime-grade materials and fatigue-resilient design</p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                <p className="text-sm text-slate-300">Repeatable control response across long duty cycles and variable environments</p>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                <p className="text-sm text-slate-300">Used in mission-critical environments where control integrity cannot fail</p>
              </div>
            </div>
            <a
              href="#contact"
              className="mt-6 inline-block text-sm font-medium text-blue-300 transition hover:text-blue-200"
            >
              Talk to engineering about your requirements
            </a>
            <p className="mt-4 text-xs text-slate-400">Full technical documentation available. Integration support included.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <VisualSystemBlock
                label="Visual proof"
                title="Control system diagram"
                src="/images/thruster-system.jpg"
                detail="Signal and redundancy path overview for engineering discussions."
              />
              <VisualSystemBlock
                label="Environment context"
                title="Bridge control environment"
                src="/images/bridge-control.jpg"
                detail="Reference control environment validated through real-world use."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-container pb-20">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-8">
          <p className="eyebrow mb-6">Trust & Certification</p>
          <div className="grid gap-4 md:grid-cols-3">
            {trustItems.map((item) => (
              <div key={item} className="rounded-lg border border-slate-800 bg-slate-900/60 p-4 text-slate-200">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Used in mission-critical maritime and industrial environments. Industries served: Maritime, Defense, Medical, Space.
            Stable supply and engineering continuity for long-term programs.
          </p>
          <a href="#contact" className="mt-4 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
            Request compliance and qualification details
          </a>
        </div>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Why It Matters</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">When control fails, the cost is immediate</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {whyItMatters.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-800 bg-surface p-6 shadow-card">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.text}</p>
              <a href="#contact" className="mt-5 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
                Discuss risk in your application
              </a>
            </article>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500"
        >
          Request Initial Technical Assessment
        </a>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">What We Do</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Built around precision, quality and control</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-slate-800 bg-surface p-6 shadow-card transition hover:-translate-y-1 hover:border-slate-600"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-slate-300">{service.text}</p>
              <a href="#contact" className="mt-5 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
                Talk to engineering team
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Technical Depth</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Engineering Depth That Scales With Your System</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {engineeringDepth.map((item) => (
            <article key={item.title} className="rounded-xl border border-slate-800 bg-surface p-6 transition hover:border-slate-600">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.text}</p>
              <a href="#contact" className="mt-5 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
                Discuss integration requirements
              </a>
            </article>
          ))}
        </div>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500"
        >
          Request Initial Technical Assessment
        </a>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Performance Data</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Real Performance Metrics</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {performanceMetrics.map((metric) => (
            <article key={metric.label} className="rounded-xl border border-slate-800 bg-surface p-6 transition hover:border-slate-600">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
              <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
              <p className="mt-2 text-sm text-slate-300">{metric.detail}</p>
            </article>
          ))}
        </div>
        <a href="#contact" className="mt-8 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
          Request full technical specification package
        </a>
      </section>

      <section id="industries" className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Industries</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Solutions tailored to high-stakes operations</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <article key={industry.title} className="rounded-xl border border-slate-800 bg-surface p-6 transition hover:border-slate-600">
              <h3 className="text-2xl font-semibold">{industry.title}</h3>
              <p className="mt-3 text-slate-300">{industry.text}</p>
              <a href="#contact" className="mt-5 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
                Request technical consultation
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="products" className="section-container section-spacing border-t border-slate-700">
        <p className="eyebrow">Products</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Core product systems</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article key={product.title} className="rounded-xl border border-slate-700 bg-surface p-6 transition hover:border-slate-500">
              <h3 className="text-xl font-semibold">{product.title}</h3>
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={400}
                className="mt-4 rounded-md border border-slate-700 object-cover"
              />
              <p className="mt-3 text-slate-300">{product.spec}</p>
              <p className="mt-3 text-sm text-slate-300">{product.useCase}</p>
              <p className="mt-2 text-sm text-slate-300">{product.integration}</p>
              <p className="mt-2 text-sm text-slate-200">{product.systemRole}</p>
              <div className="mt-4">
                <VisualSystemBlock
                  label="Product proof"
                  title={`${product.title} internal architecture`}
                  src={product.image}
                  detail="Specification packages on request."
                />
              </div>
              <a href="#contact" className="mt-5 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
                Request specs and integration details
              </a>
            </article>
          ))}
        </div>
        <TrackedAnchor
          href="#contact"
          className="mt-8 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500"
          location="products"
          label="Request Initial Technical Assessment"
        >
          Request Initial Technical Assessment
        </TrackedAnchor>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Engineering Snapshot</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Engineering Snapshot</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {engineeringSnapshot.map((point) => (
            <div key={point} className="rounded-lg border border-slate-700 bg-surface p-5 text-slate-200">
              {point}
            </div>
          ))}
        </div>
        <a href="#contact" className="mt-8 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
          Request technical workshop and integration review
        </a>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Deployment Context</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Deployed in Demanding Environments</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {deployedEnvironments.map((item) => (
            <div key={item} className="rounded-lg border border-slate-800 bg-surface p-5 text-slate-200">
              {item}
            </div>
          ))}
        </div>
        <a href="#contact" className="mt-8 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
          Discuss deployment constraints with engineering
        </a>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Global Delivery</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Global Delivery and Program Scale</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {scaleSignals.map((signal) => (
            <div key={signal} className="rounded-lg border border-slate-700 bg-surface p-5 text-slate-200">
              {signal}
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Used in production environments and designed for predictable outcomes across long-term enterprise programs.
        </p>
        <a href="#contact" className="mt-4 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
          Discuss global rollout, documentation and continuity plan
        </a>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Differentiation</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Built to outperform standard solutions</h2>
        <div className="mt-10 overflow-hidden rounded-xl border border-slate-800">
          <div className="grid grid-cols-2 border-b border-slate-800 bg-slate-900/80 text-sm font-medium">
            <div className="p-4 text-slate-400">Generic suppliers</div>
            <div className="p-4 text-blue-300">Lilaas</div>
          </div>
          {comparisonRows.map((row) => (
            <div key={row.generic} className="grid grid-cols-2 border-b border-slate-800 last:border-b-0">
              <div className="p-4 text-slate-300">{row.generic}</div>
              <div className="bg-slate-900/40 p-4 text-slate-100">{row.lilaas}</div>
            </div>
          ))}
        </div>
        <a href="#contact" className="mt-8 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
          Compare your current solution with our engineering team
        </a>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Why Choose Lilaas</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Partner confidence through proven execution</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {strengths.map((strength) => (
            <div key={strength} className="rounded-lg border border-slate-800 bg-slate-900/60 p-5 text-center transition hover:border-slate-600">
              {strength}
            </div>
          ))}
        </div>
        <a href="#contact" className="mt-8 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
          Discuss technical requirements
        </a>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Process</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">From concept to reliable deployment</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step} className="rounded-xl border border-slate-800 bg-surface p-6 transition hover:border-slate-600">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Step {index + 1}</p>
              <p className="mt-3 text-lg font-medium">{step}</p>
            </div>
          ))}
        </div>
        <a href="#contact" className="mt-8 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
          Book a technical scoping session
        </a>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Cases & Applications</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Real-world mission-critical usage</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-slate-800 bg-surface p-6">
            <h3 className="text-xl font-semibold">Ship Bridge Control Modernization</h3>
            <div className="mt-4">
              <VisualSystemBlock
                label="Case evidence"
                title="Thruster system in operation"
                src="/images/thruster-system.jpg"
                detail="Used in production environments and validated through real-world use."
              />
            </div>
            <p className="mt-3 text-slate-300"><span className="font-medium text-white">Problem:</span> Operator inconsistency during docking under variable sea states.</p>
            <p className="mt-2 text-slate-300"><span className="font-medium text-white">Solution:</span> Upgraded bridge interfaces with calibrated lever response and redundant sensing.</p>
            <p className="mt-2 text-slate-300"><span className="font-medium text-white">Outcome:</span> Reduced operator error during docking operations and ensured predictable performance.</p>
            <a href="#contact" className="mt-5 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
              Request relevant case details
            </a>
          </article>
          <article className="rounded-xl border border-slate-800 bg-surface p-6">
            <h3 className="text-xl font-semibold">Offshore Command Integration</h3>
            <div className="mt-4">
              <VisualSystemBlock
                label="Case evidence"
                title="Offshore control environment"
                src="/images/offshore-control.jpg"
                detail="Field configuration reference for high-duty operations."
              />
            </div>
            <p className="mt-3 text-slate-300"><span className="font-medium text-white">Problem:</span> Control instability and maintenance interruptions in high-duty offshore operation.</p>
            <p className="mt-2 text-slate-300"><span className="font-medium text-white">Solution:</span> Delivered custom joystick architecture tuned to workload and environmental stress.</p>
            <p className="mt-2 text-slate-300"><span className="font-medium text-white">Outcome:</span> Minimized operational uncertainty and supported continuous vessel availability.</p>
            <a href="#contact" className="mt-5 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
              Discuss offshore requirements
            </a>
          </article>
          <article className="rounded-xl border border-slate-800 bg-surface p-6">
            <h3 className="text-xl font-semibold">Specialized Industrial HMI</h3>
            <div className="mt-4">
              <VisualSystemBlock
                label="Case evidence"
                title="Joystick internal architecture"
                src="/images/lilaas-joystick.jpg"
                detail="Illustrative system-level view for technical evaluation."
              />
            </div>
            <p className="mt-3 text-slate-300"><span className="font-medium text-white">Problem:</span> Legacy interface architecture caused variable control quality across shifts.</p>
            <p className="mt-2 text-slate-300"><span className="font-medium text-white">Solution:</span> Engineered a tailored HMI platform with controlled mechanical response profile.</p>
            <p className="mt-2 text-slate-300"><span className="font-medium text-white">Outcome:</span> Ensured predictable performance and reduced failure risk in critical tasks.</p>
            <a href="#contact" className="mt-5 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
              Talk to engineering team
            </a>
          </article>
        </div>
        <a
          href="#contact"
          className="mt-8 inline-block rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500"
        >
          Request Initial Technical Assessment
        </a>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">About Lilaas</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Engineering heritage since the 1960s</h2>
        <p className="mt-6 max-w-4xl text-slate-300">
          Lilaas combines decades of industrial know-how with modern engineering methods. Our multidisciplinary team
          develops high-performance control systems with a strong culture of quality, collaboration and long-term
          customer partnerships.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-xs text-slate-300">
          <span className="rounded-full border border-slate-700 px-3 py-1">Since the 1960s</span>
          <span className="rounded-full border border-slate-700 px-3 py-1">Trusted globally</span>
          <span className="rounded-full border border-slate-700 px-3 py-1">Mission-critical deployments</span>
        </div>
        <a href="#contact" className="mt-8 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
          Speak with our team
        </a>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Engagement Path</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">How to Engage</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {engageSteps.map((step, index) => (
            <article key={step.title} className="rounded-xl border border-slate-700 bg-surface p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Step {index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
        <a href="#contact" className="mt-8 inline-block text-sm font-medium text-blue-300 hover:text-blue-200">
          Start with a technical discussion
        </a>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Engagement Value</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">What You Get</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {engagementOutputs.map((item) => (
            <div key={item} className="rounded-lg border border-slate-700 bg-surface p-5 text-slate-200">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <TrackedEventAnchor
            href="#contact"
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
            eventName="micro_cta_click"
            payload={{ type: "spec" }}
          >
            Get Example Specification
          </TrackedEventAnchor>
          <TrackedEventAnchor
            href="#contact"
            className="rounded-md border border-slate-600 px-4 py-2 text-sm text-slate-100 hover:border-slate-400"
            eventName="micro_cta_click"
            payload={{ type: "integration" }}
          >
            See Integration Example
          </TrackedEventAnchor>
          <TrackedEventAnchor
            href="#contact"
            className="text-sm text-blue-300 hover:text-blue-200"
            eventName="micro_cta_click"
            payload={{ type: "case" }}
          >
            Get Reference Case
          </TrackedEventAnchor>
        </div>
      </section>

      <section className="section-container section-spacing border-t border-slate-800">
        <p className="eyebrow">Decision Makers</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Who This Is For</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {audience.map((item) => (
            <div key={item} className="rounded-lg border border-slate-700 bg-surface p-5 text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section-container section-spacing relative border-t border-slate-800">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-12">
          <p className="eyebrow">Enterprise Partnership</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Start a Technical Dialogue</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            We work closely with engineering teams to define, design and deliver control systems that perform reliably
            in demanding environments. Built for integration into complex systems with stable supply and engineering continuity.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <ContactForm />
            </div>
            <div className="space-y-5 text-slate-300">
              <p className="text-lg font-medium text-white">Contact Information</p>

              <div className="space-y-1 text-sm">
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
              </div>

              <div className="space-y-1 text-sm">
                <TrackedEventAnchor
                  href="tel:+4741633000"
                  className="block text-blue-300 hover:text-blue-200"
                  eventName="phone_click"
                  payload={{ location: "contact" }}
                >
                  +47 416 33 000
                </TrackedEventAnchor>

                <TrackedEventAnchor
                  href="mailto:lilaas@lilaas.no"
                  className="block text-blue-300 hover:text-blue-200"
                  eventName="email_click"
                  payload={{ location: "contact" }}
                >
                  lilaas@lilaas.no
                </TrackedEventAnchor>
              </div>

              <p className="text-sm text-slate-400">Phone hours: Mon-Fri 08:00-16:00</p>

              <div className="my-4 h-px bg-slate-800" />

              <div className="space-y-2 border-t border-slate-800 pt-4 text-sm">
                <a href="/terms" className="block hover:text-blue-300">
                  Terms and Conditions
                </a>
                <a href="/transparency" className="block hover:text-blue-300">
                  Transparency Act
                </a>
              </div>

              <p className="pt-4 text-sm text-slate-400">
                We support technical evaluations, specification reviews and project scoping for high-value B2B programs.
              </p>
              <p className="text-xs text-slate-500">
                Used in real production environments. Trusted in mission-critical systems.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-slate-500">
          Typical projects range from early-stage integration support to full system-level delivery for long lifecycle programs.
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-950 to-transparent md:hidden" />
      </section>
      <div className="h-[calc(80px+env(safe-area-inset-bottom))] md:hidden" />
      <StickyCTA />
    </main>
  );
}
