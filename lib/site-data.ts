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
    image: "/images/curated/lf90x-lf120x.png",
    specs: ["5 kOhm potentiometer", "Handle movement +/-60 deg", "IP66 with panel plate"],
    whatItIs: "Control lever for single or double propulsion and thruster operation.",
    usedIn: "Bridge control, offshore control consoles and maneuvering stations.",
    category: "Control Levers"
  },
  {
    slug: "lf90-control-lever",
    name: "LF90 Control Lever",
    image: "/images/curated/steering-panels.png",
    specs: ["5 kOhm potentiometer", "IP66 enclosure with panel plate", "24V integrated scale light"],
    whatItIs: "Compact and robust multipurpose marine control lever.",
    usedIn: "Propulsion control, bow and stern thruster operation.",
    category: "Control Levers"
  },
  {
    slug: "lf150-rudder-unit",
    name: "LF150 Rudder Control Unit",
    image: "/images/curated/lf150.png",
    specs: ["Max turn up to 280 deg", "IP56 enclosure", "Approx. 3 kg net weight"],
    whatItIs: "Rudder control unit for electronic steering applications.",
    usedIn: "Marine steering stations and operator control desks.",
    category: "Control Levers"
  },
  {
    slug: "lf80-rudder-control",
    name: "LF80 Rudder Control",
    image: "/images/curated/lf80.png",
    specs: ["Single 5 kOhm potentiometer", "Detent in zero", "Panel plate 96 x 96 mm"],
    whatItIs: "Small and reliable control lever for rudder control.",
    usedIn: "Compact bridge panels and retrofit helm positions.",
    category: "Control Levers"
  },
  {
    slug: "jx-marine-joystick",
    name: "Marine Joystick Unit",
    image: "/images/curated/joystick-concept.png",
    specs: ["Dual-channel output", "Marine-duty construction", "Application-specific configuration"],
    whatItIs: "Joystick-style control unit used for operator input.",
    usedIn: "Deck machinery and bridge control stations (configuration dependent).",
    category: "Joysticks"
  },
  {
    slug: "thruster-control-unit",
    name: "Thruster Control Unit",
    image: "/images/thruster-system.jpg",
    specs: ["Integrated propulsion control", "Redundant network architecture", "Stable response under high load"],
    whatItIs: "Integrated thruster control for propulsion and maneuvering.",
    usedIn: "Offshore vessels and dynamic positioning operations.",
    category: "Thruster Control"
  },
  {
    slug: "precision-console-assembly",
    name: "Precision Mechanics Assembly",
    image: "/images/curated/precision-mechanics.png",
    specs: ["Precision mechanics", "Integration-ready build", "Design-to-spec production"],
    whatItIs: "Precision mechanical assembly concept for operator interfaces.",
    usedIn: "Bridge control and integrated vessel systems (project-specific).",
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
