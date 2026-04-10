import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/applications", label: "Applications" },
  { href: "/thruster", label: "Thruster Control" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const productItems = [
  { href: "/products", label: "All Products" },
  { href: "/products", label: "Control Levers" },
  { href: "/products", label: "Joysticks" },
  { href: "/thruster", label: "Thruster Control" },
  { href: "/products", label: "Precision Mechanics" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="section-container flex min-h-16 items-center justify-between gap-6 py-3">
        <Link href="/" className="text-base font-semibold tracking-wide text-white">
          Lilaas
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm text-slate-300">
          <div className="group relative">
            <Link href="/products" className="transition hover:text-white">
              Products
            </Link>
            <div className="invisible absolute right-0 top-full z-20 mt-3 w-56 rounded-md border border-slate-700 bg-slate-950 p-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
              {productItems.map((item) => (
                <Link key={item.label} href={item.href} className="block rounded px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
