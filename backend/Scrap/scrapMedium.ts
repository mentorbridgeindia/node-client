import { REPHRASE_PROMPT } from "../constants";
import { callAi } from "../Gemini/callAi";
import { Medium } from "../Models/Medium";
import scrapeWebPage from "./scrap";

// Function to scrape webpage
export const scrapeMedium = async (url: string) => {
  console.log("Scraping medium:", url);
  try {
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

    const response = await scrapeWebPage(url, excludedClasses, excludedIds);
    if (!response) {
      return;
    }
    const aiResponse = await callAi(
      REPHRASE_PROMPT,
      response.title,
      "application/json"
    );
    if (!aiResponse || aiResponse === null || aiResponse === "") {
      return;
    }
    const aiRephrasedResponse = JSON.parse(aiResponse);
    console.log("AI rephrased response:", aiRephrasedResponse?.title);
    const medium = new Medium({
      title: aiRephrasedResponse.title,
      content: aiRephrasedResponse.content,
      image: response.images[0],
      createdAt: new Date(),
    });
    console.log("Medium:", medium);
    const savedMedium = await medium.save();
    console.log("Saved medium:", savedMedium);

    console.log("Scraping completed!");
  } catch (error) {
    console.error("Error during scraping:", error.message);
  }
};

export default scrapeMedium;
