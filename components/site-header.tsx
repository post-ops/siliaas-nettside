import Link from "next/link";

const navItems = [
  { href: "/products", label: "Control Units" },
  { href: "/thruster", label: "Systems" },
  { href: "/applications", label: "Applications" },
  { href: "/about", label: "Company" },
  { href: "/media-library", label: "Library" },
  { href: "/contact", label: "Service" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-800/35 bg-background/90 backdrop-blur">
      <div className="section-container flex min-h-16 items-center justify-between gap-6 py-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-base font-semibold tracking-wide text-white">
            Lilaas
          </Link>
          <p className="hidden text-xs uppercase tracking-[0.14em] text-slate-400 md:block">Marine control systems</p>
        </div>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm text-slate-300">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-accentSoft">
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-accentHover"
          >
            Request Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
