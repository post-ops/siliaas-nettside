"use client";

import { useEffect, useRef } from "react";
import { event } from "@/lib/analytics";

export function ScrollDepthTracker() {
  const tracked = useRef({ 25: false, 50: false, 75: false });

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      if (height <= 0) return;

      const percent = Math.round((scroll / height) * 100);

      if (percent > 25 && !tracked.current[25]) {
        tracked.current[25] = true;
        event("scroll_25");
      }
      if (percent > 50 && !tracked.current[50]) {
        tracked.current[50] = true;
        event("scroll_50");
      }
      if (percent > 75 && !tracked.current[75]) {
        tracked.current[75] = true;
        event("scroll_75");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
