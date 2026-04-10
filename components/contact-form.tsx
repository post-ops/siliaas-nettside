"use client";

import { FormEvent, useState } from "react";
import { event } from "@/lib/analytics";

export function ContactForm() {
  const [started, setStarted] = useState(false);

  const handleFocus = () => {
    if (started) return;
    setStarted(true);
    event("form_start", { form: "contact" });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    event("form_submit", { form: "contact" });
  };

  return (
    <form className="space-y-4" onFocus={handleFocus} onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm outline-none focus:border-blue-400" />
      <input type="email" placeholder="Email" className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm outline-none focus:border-blue-400" />
      <input type="text" placeholder="Company" className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm outline-none focus:border-blue-400" />
      <textarea placeholder="Message" rows={4} className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm outline-none focus:border-blue-400" />
      <button
        type="submit"
        className="w-full md:w-auto rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-500"
        onClick={() =>
          event("cta_click", {
            location: "final",
            label: "Contact Lilaas"
          })
        }
      >
        Contact Lilaas
      </button>
      <div className="flex flex-wrap gap-3 pt-2">
        <a
          href="mailto:lilaas@lilaas.no"
          className="text-sm font-medium text-blue-300 hover:text-blue-200"
          onClick={() => event("email_click", { location: "contact" })}
        >
          lilaas@lilaas.no
        </a>
        <a
          href="tel:+4741633000"
          className="text-sm font-medium text-blue-300 hover:text-blue-200"
          onClick={() => event("phone_click", { location: "contact" })}
        >
          +47 416 33 000
        </a>
      </div>
    </form>
  );
}
