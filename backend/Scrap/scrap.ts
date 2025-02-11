const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

// Function to scrape webpage
const scrapeWebPage = async (
  url: string,
  excludedClasses: string[],
  excludedIds: string[]
) => {
  try {
    // Fetch the HTML from the webpage
    const { data: html } = await axios.get(url);

    // Load HTML into cheerio
    const $ = cheerio.load(html);

    excludedClasses.forEach((className) => $(`.${className}`).remove());

    // Remove unwanted elements by their IDs
    excludedIds.forEach((id) => $(`#${id}`).remove());

    // Extract text content
    const textContent = $("body")
      .find("*")
      .contents()
      .not(excludedClasses.map((cls) => `.${cls}`).join(", "))
      .not(excludedIds.map((id) => `#${id}`).join(", "))
      .filter((_, element) => element.type === "text")
      .map((_, element) => $(element).text().trim())
      .get()
      .filter((text) => text.length > 0)
      .join("\n");

    const title = $("title").text().trim();

    // TODO: Add AI call here to split the content into pages

    // Extract image URLs
    const imageUrls: string[] = [];
    let coverImage = "";
    $("img").each((_, img) => {
      if ($(img).attr("class") === "rounded-full") {
        return;
      }
      if ($(img).attr("alt") === "Preview image") {
        coverImage = $(img).attr("src");
      }
      const src = $(img).attr("src");
      if (src) {
        imageUrls.push(src);
      }
    });

    // Save text to a file
    // fs.writeFileSync(path.join(__dirname, "output.txt"), textContent);

    const images: string[] = [];
    for (const [index, imageUrl] of imageUrls.entries()) {
      const imageResponse = await axios({
        url: imageUrl.startsWith("http")
          ? imageUrl
          : new URL(imageUrl, url).href,
        method: "GET",
        responseType: "stream",
      });

      const chunks: Buffer[] = [];
      imageResponse.data.on("data", (chunk: Buffer) => {
        chunks.push(chunk);
      });

      imageResponse.data.on("end", async () => {
        const buffer = Buffer.concat(chunks);
        const base64Image = buffer.toString("base64");
        images.push(base64Image);
      });

      // const imagePath = path.join(__dirname, `image_${index + 1}.jpg`);
      // const writer = fs.createWriteStream(imagePath);
      // imageResponse.data.pipe(writer);
    }

    return {
      title,
      textContent:
        textContent.length > 2000
          ? textContent.substring(0, 2000)
          : textContent,
      coverImage,
      images,
    };
  } catch (error) {
    console.error("Error during scraping:", error.message);
    return null;
  }
};

export default scrapeWebPage;
