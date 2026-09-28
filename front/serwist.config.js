// @ts-check
import { serwist } from "@serwist/next/config";

// Génère public/sw.js après `next build` (commande : serwist build).
export default serwist({
  swSrc: "src/app/sw.ts",
  swDest: "public/sw.js",
  precachePrerendered: true,
});
