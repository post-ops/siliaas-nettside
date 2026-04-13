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
    image: "/images/library/asset-14.png",
    specs: ["5 kOhm potentiometer", "Handle movement +/-60 deg", "IP66 with panel plate"],
    whatItIs: "Control lever for single or double propulsion and thruster operation.",
    usedIn: "Bridge control, offshore control consoles and maneuvering stations.",
    category: "Control Levers"
  },
  {
    slug: "lf90-control-lever",
    name: "LF90 Control Lever",
    image: "/images/library/asset-11.png",
    specs: ["5 kOhm potentiometer", "IP66 enclosure with panel plate", "24V integrated scale light"],
    whatItIs: "Compact and robust multipurpose marine control lever.",
    usedIn: "Propulsion control, bow and stern thruster operation.",
    category: "Control Levers"
  },
  {
    slug: "lf150-rudder-unit",
    name: "LF150 Rudder Control Unit",
    image: "/images/library/asset-05.png",
    specs: ["Max turn up to 280 deg", "IP56 enclosure", "Approx. 3 kg net weight"],
    whatItIs: "Rudder control unit for electronic steering applications.",
    usedIn: "Marine steering stations and operator control desks.",
    category: "Control Levers"
  },
  {
    slug: "lf80-rudder-control",
    name: "LF80 Rudder Control",
    image: "/images/library/asset-04.png",
    specs: ["Single 5 kOhm potentiometer", "Detent in zero", "Panel plate 96 x 96 mm"],
    whatItIs: "Small and reliable control lever for rudder control.",
    usedIn: "Compact bridge panels and retrofit helm positions.",
    category: "Control Levers"
  },
  {
    slug: "jx-marine-joystick",
    name: "JX Marine Joystick",
    image: "/images/library/asset-02.png",
    specs: ["Dual-channel output", "High repeatability", "Marine-duty construction"],
    whatItIs: "Joystick for vessel positioning and deck handling.",
    usedIn: "Deck machinery, dynamic positioning and bridge control stations.",
    category: "Joysticks"
  },
  {
    slug: "thruster-control-unit",
    name: "Thruster Control Unit",
    image: "/images/library/asset-06.png",
    specs: ["Integrated propulsion control", "Redundant network architecture", "Stable response under high load"],
    whatItIs: "Integrated thruster control for propulsion and maneuvering.",
    usedIn: "Offshore vessels and dynamic positioning operations.",
    category: "Thruster Control"
  },
  {
    slug: "precision-console-assembly",
    name: "Precision Console Assembly",
    image: "/images/library/asset-15.png",
    specs: ["Precision mechanics", "Integration-ready build", "Long service life"],
    whatItIs: "Operator console assembly with precision mechanics.",
    usedIn: "Bridge control and integrated vessel systems.",
    category: "Precision Mechanics"
  }
];

export const applicationAreas = [
  {
    title: "Maritime",
    image: "/images/library/asset-03.png",
    whatItIs: "Control interfaces for bridge and propulsion systems.",
    usedIn: "Commercial shipping and coastal operations."
  },
  {
    title: "Defence",
    image: "/images/library/asset-10.png",
    whatItIs: "Control hardware for mission-critical platforms.",
    usedIn: "Surface vessels and land-based control stations."
  },
  {
    title: "Medical",
    image: "/images/library/asset-02.png",
    whatItIs: "Precision input mechanics for controlled equipment.",
    usedIn: "Surgical and diagnostic systems."
  },
  {
    title: "Space",
    image: "/images/library/asset-22.png",
    whatItIs: "Control components for low-tolerance assemblies.",
    usedIn: "Satellite and ground support equipment."
  }
];

export type ImageCategory = "Marine Operations" | "Product Photos" | "System Diagrams" | "Concept Renders";

export type ImageAsset = {
  src: string;
  title: string;
  category: ImageCategory;
};

export const imageLibrary: ImageAsset[] = [
  { src: "/images/library/asset-01.png", title: "Boat at Sea", category: "Marine Operations" },
  { src: "/images/library/asset-02.png", title: "Medical Environment", category: "Marine Operations" },
  { src: "/images/library/asset-03.png", title: "Container Vessel", category: "Marine Operations" },
  { src: "/images/library/asset-04.png", title: "LF80 Product", category: "Product Photos" },
  { src: "/images/library/asset-05.png", title: "LF150 Product", category: "Product Photos" },
  { src: "/images/library/asset-06.png", title: "Thruster Network Diagram", category: "System Diagrams" },
  { src: "/images/library/asset-07.png", title: "Marine Wheel Collection", category: "Product Photos" },
  { src: "/images/library/asset-08.png", title: "Joystick Unit", category: "Product Photos" },
  { src: "/images/library/asset-09.png", title: "Cruise Vessel Operation", category: "Marine Operations" },
  { src: "/images/library/asset-10.png", title: "Lever Set - Side View", category: "Product Photos" },
  { src: "/images/library/asset-11.png", title: "LF90X and LF120X", category: "Product Photos" },
  { src: "/images/library/asset-12.png", title: "Premium Control Render", category: "Concept Renders" },
  { src: "/images/library/asset-13.png", title: "Dual Lever Assembly", category: "Product Photos" },
  { src: "/images/library/asset-14.png", title: "Triple Control Render", category: "Concept Renders" },
  { src: "/images/library/asset-15.png", title: "Console Unit Close-up", category: "Concept Renders" },
  { src: "/images/library/asset-16.png", title: "LF120 Product Variant", category: "Product Photos" },
  { src: "/images/library/asset-17.png", title: "Lilaas Joystick Family", category: "Product Photos" },
  { src: "/images/library/asset-18.png", title: "Three Lever Product Set", category: "Product Photos" },
  { src: "/images/library/asset-19.png", title: "Top-view Instrument Cluster", category: "Product Photos" },
  { src: "/images/library/asset-20.png", title: "Control Lever Set", category: "Product Photos" },
  { src: "/images/library/asset-21.png", title: "Thruster Controller Pair", category: "Product Photos" },
  { src: "/images/library/asset-22.png", title: "Advanced Console Render", category: "Concept Renders" },
  { src: "/images/library/asset-23.png", title: "Premium Knob Pair", category: "Product Photos" },
  { src: "/images/library/asset-24.png", title: "Render Study 01", category: "Concept Renders" },
  { src: "/images/library/asset-25.png", title: "Render Study 02", category: "Concept Renders" },
  { src: "/images/library/asset-26.png", title: "Render Study 03", category: "Concept Renders" },
  { src: "/images/library/asset-27.png", title: "Render Study 04", category: "Concept Renders" },
  { src: "/images/library/asset-28.png", title: "Render Study 05", category: "Concept Renders" }
];
