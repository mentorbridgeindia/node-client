import { initiateScraping } from "./initiateScraping";

const cron = require("node-cron");

export const cronJob = () => {
  cron.schedule("0 0 4 * * *", async function () {
    console.log("running a task at 4th hour exactly");
    initiateScraping();
  });
};
