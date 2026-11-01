import fs from "fs";

const projectImage = {
  src: "/images/projectimage.png",
  width: 1600,
  height: 1000,
};

const alts = {
  "shree-dental-care":
    "Appointment booking interface for Shree Dental Care sample project",
  "spice-route-kitchen":
    "WhatsApp ordering flow for Spice Route Kitchen sample project",
  "mehta-general-store":
    "Inventory and billing dashboard for Mehta General Store sample project",
  "urban-loom": "Online store preview for Urban Loom sample project",
  "brightpath-classes":
    "Coaching website preview for BrightPath Classes sample project",
};

let site = fs.readFileSync("lib/site-config.ts", "utf8");

for (const [slug, alt] of Object.entries(alts)) {
  const marker = `slug: "${slug}"`;
  const start = site.indexOf(marker);
  if (start < 0) continue;
  const imgStart = site.indexOf("image: {", start);
  const imgEnd = site.indexOf("},", imgStart);
  if (imgStart < 0 || imgEnd < 0) continue;
  const replacement = `image: {
      src: "${projectImage.src}",
      alt: "${alt}",
      width: ${projectImage.width},
      height: ${projectImage.height},
    }`;
  site = site.slice(0, imgStart) + replacement + site.slice(imgEnd + 1);
}

fs.writeFileSync("lib/site-config.ts", site);

let blog = fs.readFileSync("lib/blog-posts.ts", "utf8");
blog = blog.replaceAll('src: "",\n      alt:', 'src: "/images/projectimage.png",\n      alt:');
// only covers should change — authorAvatar already has myprofilepic. Fix if author got overwritten.
blog = blog.replaceAll(
  'authorAvatar: {\n      src: "/images/projectimage.png"',
  'authorAvatar: {\n      src: "/images/myprofilepic.png"'
);
fs.writeFileSync("lib/blog-posts.ts", blog);

console.log("wired projectimage for projects + blog covers");
