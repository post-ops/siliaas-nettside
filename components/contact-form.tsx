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
      <input
        type="text"
        placeholder="Full name"
        className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm outline-none focus:border-blue-400"
      />
      <input
        type="email"
        placeholder="Work email"
        className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm outline-none focus:border-blue-400"
      />
      <input
        type="text"
        placeholder="Company"
        className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm outline-none focus:border-blue-400"
      />
      <textarea
        placeholder="Project details"
        rows={4}
        className="w-full rounded-md border border-slate-700 bg-slate-900/80 px-4 py-3 text-sm outline-none focus:border-blue-400"
      />
      <p className="text-sm text-slate-300">No commitment required. Initial assessment is purely technical and exploratory.</p>
      <button
        type="submit"
        className="mt-2 w-full rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-500"
        onClick={() =>
          event("cta_click", {
            location: "final",
            label: "Get initial technical direction"
          })
        }
      >
        Get initial technical direction
      </button>
      <p className="mt-2 text-xs text-green-400">Typically scheduled within 1-2 business days</p>
      <p className="text-xs text-slate-400">Engineering team available. We respond within 24h.</p>
      <p className="text-xs text-slate-400">Typical response time: within 24 hours with initial technical direction.</p>
      <p className="text-xs text-slate-400">
        What we need from you: application context, environment profile, integration constraints and timeline.
      </p>
      <p className="text-xs text-slate-400">
        What you get back: technical recommendation, integration direction and specification package path.
      </p>
      <div className="pt-2 flex flex-wrap gap-3">
        <a
          href="mailto:sales@lilaas.no"
          className="text-sm font-medium text-blue-300 hover:text-blue-200"
          onClick={() => event("email_click", { location: "contact" })}
        >
          Email us directly
        </a>
        <a
          href="tel:+4700000000"
          className="text-sm font-medium text-blue-300 hover:text-blue-200"
          onClick={() => event("phone_click", { location: "contact" })}
        >
          Call engineering team
        </a>
      </div>
    </form>
  );
}
