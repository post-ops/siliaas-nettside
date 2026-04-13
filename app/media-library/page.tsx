import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { PremiumImage } from "@/components/premium-image";

type MediaItem = {
  src: string;
  title: string;
  filename: string;
  verification: "Verified model (lilaas.no)" | "Reference / unverified model";
};

function toTitle(filename: string, index: number): { title: string; verification: MediaItem["verification"] } {
  const name = filename.toLowerCase();
  if (name.includes("lf80")) return { title: "LF80 Rudder Control", verification: "Verified model (lilaas.no)" };
  if (name.includes("lf150")) return { title: "LF150 Rudder Control Unit", verification: "Verified model (lilaas.no)" };
  if (name.includes("lf90") || name.includes("lf120")) return { title: "LF90 / LF120 Control Lever Reference", verification: "Verified model (lilaas.no)" };
  if (name.includes("maritime")) return { title: "Maritime Operations Reference", verification: "Reference / unverified model" };
  if (name.includes("boat-at-sea")) return { title: "Boat at Sea Reference", verification: "Reference / unverified model" };
  if (name.includes("hospital")) return { title: "Medical Environment Reference", verification: "Reference / unverified model" };
  if (name.includes("thruster")) return { title: "Thruster Concept Reference", verification: "Reference / unverified model" };
  if (name.includes("joystick")) return { title: "Joystick Concept Reference", verification: "Reference / unverified model" };
  if (name.includes("precision")) return { title: "Precision Mechanics Reference", verification: "Reference / unverified model" };
  if (name.includes("steering")) return { title: "Steering Panel Reference", verification: "Reference / unverified model" };
  if (name.includes("console")) return { title: "Control Console Reference", verification: "Reference / unverified model" };
  if (name.includes("bilde_nettside_lilaas")) return { title: "Lilaas Product Family Reference", verification: "Reference / unverified model" };
  if (name.includes("image-")) return { title: "Lilaas Reference Image", verification: "Reference / unverified model" };
  if (name.includes("untitled")) {
    return { title: `Lilaas Product Render ${String(index + 1).padStart(2, "0")}`, verification: "Reference / unverified model" };
  }
  if (name.startsWith("asset-")) {
    return { title: `Lilaas Asset ${name.replace("asset-", "").replace(".png", "")}`, verification: "Reference / unverified model" };
  }
  return { title: `Lilaas Image ${String(index + 1).padStart(2, "0")}`, verification: "Reference / unverified model" };
}

async function loadMedia(): Promise<MediaItem[]> {
  const folders = [
    { dir: join(process.cwd(), "public", "images", "curated"), prefix: "/images/curated/" },
    { dir: join(process.cwd(), "public", "images", "imported"), prefix: "/images/imported/" }
  ];

  const items: MediaItem[] = [];

  for (const folder of folders) {
    const files = await readdir(folder.dir);
    files
      .filter((file) => /\.(png|jpg|jpeg|webp)$/i.test(file))
      .sort((a, b) => a.localeCompare(b))
      .forEach((file, index) => {
        const named = toTitle(file, index);
        items.push({
          src: `${folder.prefix}${file}`,
          filename: file,
          title: named.title,
          verification: named.verification
        });
      });
  }

  return items;
}

export default async function MediaLibraryPage() {
  const media = await loadMedia();

  return (
    <main className="section-container section-spacing">
      <p className="eyebrow">Media Library</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">All Uploaded Images</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Complete image set provided for the project. Model labels are only marked as verified when directly matched against lilaas.no model pages.
      </p>
      <p className="mt-2 text-sm text-slate-400">{media.length} images available</p>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {media.map((item) => (
          <article key={item.src} className="rounded-xl border border-cyan-700/30 bg-surface p-4">
            <PremiumImage src={item.src} alt={item.title} variant="product" />
            <p className="mt-3 text-sm text-slate-300">{item.title}</p>
            <p className="mt-1 text-xs text-slate-400 break-all">{item.filename}</p>
            <p className="mt-2 text-xs font-semibold text-accentSoft">{item.verification}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
