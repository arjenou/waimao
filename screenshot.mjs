import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto("http://localhost:5173/", { waitUntil: "networkidle" });
await page.waitForTimeout(400);
await page.screenshot({ path: "screenshots/home-hero.png" });

await browser.close();
console.log("done");
