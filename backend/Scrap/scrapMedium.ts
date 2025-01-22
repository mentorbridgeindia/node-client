import axios from "axios";
import * as cheerio from "cheerio";
import { callAi } from "../Gemini/callAi";
import scrapeWebPage from "./scrap";
import { Medium } from "../Models/Medium";

// Function to scrape webpage
const scrapeMedium = async (url: string) => {
  const freedium = "https://freedium.cfd/";
  try {
    // Fetch the HTML from the webpage
    const { data: html } = await axios.get(url);

    // Load HTML into cheerio
    const $ = cheerio.load(html);

    // Remove unwanted elements by their class
    const excludedClasses = [
      "notification-container",
      "ad-banner",
      "popup",
      "text-base",
      "bg-gray-100",
    ];

    const excludedIds = [
      "nav-toggle",
      "nav-content",
      "footer-section",
      "sidebar",
      "openProblemModal",
    ];

    excludedClasses.forEach((className) => $(`.${className}`).remove());

    // Remove unwanted elements by their IDs
    excludedIds.forEach((id) => $(`#${id}`).remove());
    // Find all <a> tags and extract the href attribute
    const links: string[] = [];
    $("div").each((index, element) => {
      const href = $(element).attr("data-href");
      if (href) {
        if (href.includes("?")) {
          links.push(freedium + href.split("?")[0]);
        } else {
          links.push(freedium + href);
        }
      }
    });

    for (const link of links) {
      const response = await scrapeWebPage(link, excludedClasses, excludedIds);
      if (!response) {
        continue;
      }
      const aiResponse = await callAi(response.textContent);
      if (!aiResponse || aiResponse === null) {
        continue;
      }
      // save aiResponse to MongoDB in table "medium"
      const medium = new Medium({
        title: response.textContent.split("\n")[0],
        content: aiResponse?.content,
        images: response.images,
      });
      await medium.save();
      console.log(aiResponse);
    }

    console.log("Scraping completed!");
  } catch (error) {
    console.error("Error during scraping:", error.message);
  }
};

export default scrapeMedium;
