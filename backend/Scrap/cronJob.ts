const cron = require("node-cron");

export const cronJob = () => {
  cron.schedule("0 0 2 * * *", function () {
    console.log("running a task at 2nd hour exactly");
    // 1. scrape medium website for latest articles
    // 2. save the articles in the database
    // 3. send the articles to the email
  });
};
