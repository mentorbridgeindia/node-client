import Parser from "rss-parser";
import axios from "axios";

export const getLinksFromRSS = async (url: string): Promise<string[]> => {
  try {
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const parser = new Parser();
    const feed = await parser.parseString(response.data);

    const links: string[] = feed.items
      .map((item) => item.link)
      .filter((link) => link) as string[];
    return links;
  } catch (error) {
    console.error("Error fetching or parsing RSS:", error);
    return [];
  }
};
