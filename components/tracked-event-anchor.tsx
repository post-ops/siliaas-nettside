"use client";

import type { ReactNode } from "react";
import { event } from "@/lib/analytics";

type TrackedEventAnchorProps = {
  href: string;
  className?: string;
  children: ReactNode;
  eventName: string;
  payload?: Record<string, unknown>;
};

export function TrackedEventAnchor({ href, className, children, eventName, payload = {} }: TrackedEventAnchorProps) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => {
        event(eventName, payload);
      }}
    >
      {children}
    </a>
  );
}
