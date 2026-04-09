"use client";

import { useEffect, useState } from "react";
import { event } from "@/lib/analytics";

export function StickyCTA() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHidden(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(contact);

    return () => {
      observer.unobserve(contact);
      observer.disconnect();
    };
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800 bg-slate-950/90 pb-[env(safe-area-inset-bottom)] backdrop-blur animate-[slideUp_0.4s_ease-out]">
      <div className="section-container flex flex-col gap-2 py-3 md:flex-row md:items-center md:justify-between">
        <div className="hidden md:block">
          <p className="text-sm text-slate-300">Discuss your application with our engineering team</p>
          <p className="text-xs text-slate-400">No commitment • Technical-first discussion</p>
        </div>
        <a
          href="#contact"
          className="w-full rounded-md bg-accent px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-500 md:w-auto"
          onClick={() =>
            event("cta_click", {
              location: "sticky",
              label: "Request Initial Technical Assessment"
            })
          }
        >
          Request Initial Technical Assessment
        </a>
      </div>
    </div>
  );
}
