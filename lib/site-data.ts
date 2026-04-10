/** Key data row — use site-wide for consistency (• separators, °C). */
export const KEY_DATA_LINE = ">10M cycles • IP67 • -40°C to +85°C • Dual-channel output";

export type ProductItem = {
  slug: string;
  name: string;
  image: string;
  specs: string[];
  whatItIs: string;
  usedIn: string;
  category: "Control Levers" | "Joysticks" | "Thruster Control" | "Precision Mechanics";
};

export const products: ProductItem[] = [
  {
    slug: "lf120-control-lever",
    name: "LF120 Control Lever",
    image: "/images/lilaas-lever.jpg",
    specs: ["Up to 10M cycles", "IP67 sealing", "Dual sensor configuration"],
    whatItIs: "Control lever for propulsion and maneuvering systems.",
    usedIn: "Bridge control and vessel operations.",
    category: "Control Levers"
  },
  {
    slug: "jx-marine-joystick",
    name: "JX Marine Joystick",
    image: "/images/lilaas-joystick.jpg",
    specs: ["Dual channel", "Hall sensor technology", "High repeatability"],
    whatItIs: "Joystick for vessel positioning and deck handling.",
    usedIn: "Deck machinery and bridge control stations.",
    category: "Joysticks"
  },
  {
    slug: "thruster-control-unit",
    name: "Thruster Control Unit",
    image: "/images/thruster-system.jpg",
    specs: ["Integrated propulsion control", "Stable response under high load", "Marine duty configuration"],
    whatItIs: "Integrated thruster control for propulsion and maneuvering.",
    usedIn: "Offshore vessels and dynamic positioning operations.",
    category: "Thruster Control"
  },
  {
    slug: "precision-console-assembly",
    name: "Precision Console Assembly",
    image: "/images/lilaas-console.jpg",
    specs: ["Precision mechanics", "Integration-ready build", "Long service life"],
    whatItIs: "Operator console assembly with precision mechanics.",
    usedIn: "Bridge control and integrated vessel systems.",
    category: "Precision Mechanics"
  }
];

export const applicationAreas = [
  {
    title: "Maritime",
    whatItIs: "Control interfaces for bridge and propulsion systems.",
    usedIn: "Commercial shipping and coastal operations."
  },
  {
    title: "Defence",
    whatItIs: "Control hardware for mission-critical platforms.",
    usedIn: "Surface vessels and land-based control stations."
  },
  {
    title: "Medical",
    whatItIs: "Precision input mechanics for controlled equipment.",
    usedIn: "Surgical and diagnostic systems."
  },
  {
    title: "Space",
    whatItIs: "Control components for low-tolerance assemblies.",
    usedIn: "Satellite and ground support equipment."
  }
];
