import { switchDatabase } from "../Database/switchDatabase";
import { Medium } from "../Models/Medium";
import { STUPRO_DB } from "../constants";
import { getLinksFromRSS } from "./getLinksFromRSS";
import { scrapeMedium } from "./scrapMedium";

const freedium = "https://freedium.cfd/";

export const initiateScraping = async () => {
  switchDatabase(STUPRO_DB);

  // TODO: get tags from the database
  const tags = [
    // "javascript",
    "react",
    "nodejs",
    "typescript",
    "artificial-intelligence",
    "machine-learning",
    "data-science",
    "deep-learning",
    "neural-networks",
    "computer-vision",
  ];
  for (const tag of tags) {
    console.log("Scraping RSS feed for tag:", tag);
    setTimeout(async () => {
      const rssUrl = `https://medium.com/feed/tag/${tag}`;
      const links = await getLinksFromRSS(rssUrl);
      if (links.length > 0) {
        links.forEach(async (link) => {
          if (link.includes("?")) {
            links.push(freedium + link.split("?")[0]);
          } else {
            links.push(freedium + link);
          }
          await scrapeMedium(link);
        });
      } else {
        console.log("No links found in the RSS feed.");
      }
    }, 1000 * 120);
  }
};
