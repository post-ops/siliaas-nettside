import { PremiumImage } from "@/components/premium-image";
import { imageLibrary } from "@/lib/site-data";

const specificationHighlights = [
  {
    model: "LF80",
    details: ["5 kOhm potentiometer", "Panel plate 96 x 96 mm", "Detent in zero position"]
  },
  {
    model: "LF90",
    details: ["5 kOhm potentiometer", "IP66 enclosure with panel plate", "24V scale light"]
  },
  {
    model: "LF120",
    details: ["Single or double propulsion control", "IP66 with panel plate", "Handle movement +/-60 deg"]
  },
  {
    model: "LF150",
    details: ["Rudder control unit", "Maximum turn up to 280 deg", "IP56 enclosure"]
  }
];

export default function GalleryPage() {
  const categories = [
    "Marine Operations",
    "Product Photos",
    "System Diagrams",
    "Concept Renders"
  ] as const;

  return (
    <main className="section-container section-spacing">
      <p className="eyebrow">Media Library</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">All Reference Images</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Complete image set uploaded for this project. Specifications below are summarized from official product descriptions on lilaas.no.
      </p>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        {specificationHighlights.map((item) => (
          <article key={item.model} className="rounded-xl border border-cyan-700/30 bg-surface p-6">
            <h2 className="text-xl font-semibold">{item.model} Specification Snapshot</h2>
            <ul className="mt-3 space-y-1 text-sm text-slate-300">
              {item.details.map((detail) => (
                <li key={detail}>- {detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      {categories.map((category) => (
        <section key={category} className="mt-12">
          <h2 className="text-2xl font-semibold">{category}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {imageLibrary
              .filter((image) => image.category === category)
              .map((image) => (
                <article key={image.src} className="rounded-xl border border-cyan-700/30 bg-surface p-4">
                  <PremiumImage src={image.src} alt={image.title} variant="product" />
                  <p className="mt-3 text-sm text-slate-300">{image.title}</p>
                </article>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}
