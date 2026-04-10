import { ContactForm } from "@/components/contact-form";

export default function ContactPage() {
  return (
    <main className="section-container section-spacing">
      <p className="eyebrow">Contact</p>
      <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Contact Lilaas</h1>
      <p className="mt-4 text-slate-300">For technical inquiries, contact our engineering team directly.</p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <section className="rounded-xl border border-slate-700 bg-surface p-6">
          <h2 className="text-xl font-semibold">Direct Contact</h2>
          <p className="mt-4 text-slate-300">
            Phone: <a href="tel:+4741633000" className="text-blue-300 hover:text-blue-200">+47 416 33 000</a>
          </p>
          <p className="mt-2 text-sm text-slate-400">Phone preferred for urgent inquiries.</p>
          <p className="mt-3 text-slate-300">
            Email: <a href="mailto:lilaas@lilaas.no" className="text-blue-300 hover:text-blue-200">lilaas@lilaas.no</a>
          </p>
          <p className="mt-3 text-slate-300">
            Address:{" "}
            <a
              href="https://www.google.com/maps?q=Kongeveien+75,+3188+Horten"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-200"
            >
              Kongeveien 75, 3188 Horten, Norway
            </a>
          </p>
          <p className="mt-3 text-sm text-slate-400">Phone hours: Mon-Fri 08:00-16:00</p>
        </section>

        <section className="rounded-xl border border-slate-700 bg-surface p-6">
          <h2 className="text-xl font-semibold">Send Technical Request</h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
