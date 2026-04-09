import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const targetDir = join(process.cwd(), "public", "images");

const imageMap = [
  {
    filename: "bridge-control.jpg",
    url: "https://lilaas.no/wp-content/uploads/2024/02/60ba0c4258b72035e623010c_boat-at-sea.jpg"
  },
  {
    filename: "thruster-system.jpg",
    url: "https://lilaas.no/wp-content/uploads/2024/02/60ba1d044d170d2a58c8fb1c_infographics-ltc.jpg"
  },
  {
    filename: "offshore-control.jpg",
    url: "https://lilaas.no/wp-content/uploads/2024/02/60ba15d841683810c4d8c746_boat-comparison.jpg"
  },
  {
    filename: "lilaas-lever.jpg",
    url: "https://lilaas.no/wp-content/uploads/2024/02/60ba334c2c1c2b29d84526e4_front-L01.png"
  },
  {
    filename: "lilaas-joystick.jpg",
    url: "https://lilaas.no/wp-content/uploads/2024/02/60bdc4521568e859607db81f_6.png"
  },
  {
    filename: "lilaas-console.jpg",
    url: "https://lilaas.no/wp-content/uploads/2024/02/60ba2f89c6130881dcec0aec_ltc-panel-p-800.png"
  }
];

async function downloadImage(url, destination) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${url} (${res.status})`);
  }
  const arrayBuffer = await res.arrayBuffer();
  await writeFile(destination, Buffer.from(arrayBuffer));
}

async function main() {
  await mkdir(targetDir, { recursive: true });
  for (const item of imageMap) {
    const destination = join(targetDir, item.filename);
    await downloadImage(item.url, destination);
    console.log(`Saved: ${item.filename}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
