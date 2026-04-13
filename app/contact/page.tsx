import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <main className="section-container section-spacing">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Talk to Engineering</h1>
      <p className="mt-4 text-slate-300">For technical inquiries, quotations, and project discussion, contact the engineering team directly.</p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section className="rounded-xl border border-cyan-700/30 bg-surface p-6">
          <h2 className="text-xl font-semibold">Direct Contact</h2>
          <p className="mt-4 text-slate-300">
            Phone: <a href="tel:+4741633000" className="text-link hover:text-linkHover">+47 416 33 000</a>
          </p>
          <p className="mt-2 text-sm text-slate-400">Phone preferred for urgent inquiries.</p>
          <p className="mt-3 text-slate-300">
            Email: <a href="mailto:lilaas@lilaas.no" className="text-link hover:text-linkHover">lilaas@lilaas.no</a>
          </p>
          <p className="mt-3 text-slate-300">
            Address:{" "}
            <a
              href="https://www.google.com/maps?q=Kongeveien+75,+3188+Horten"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:text-linkHover"
            >
              Kongeveien 75, 3188 Horten, Norway
            </a>
          </p>
          <p className="mt-3 text-sm text-slate-400">Phone hours: Mon-Fri 08:00-16:00</p>
        </section>

        <section className="rounded-xl border border-cyan-700/30 bg-surface p-6">
          <h2 className="text-xl font-semibold">Send Technical Request</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
