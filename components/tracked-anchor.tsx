"use client";

import type { ReactNode } from "react";
import { event } from "@/lib/analytics";

type TrackedAnchorProps = {
  href: string;
  className?: string;
  children: ReactNode;
  location: "hero" | "sticky" | "products" | "final" | "why";
  label: string;
};

export function TrackedAnchor({ href, className, children, location, label }: TrackedAnchorProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() =>
        event("cta_click", {
          location,
          label
        })
      }
    >
      {children}
    </a>
  );
}
