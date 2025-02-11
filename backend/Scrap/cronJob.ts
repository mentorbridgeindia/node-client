import { codingChallenge } from "../cronjobs/codingChallenge/codingChallege";
import { puzzle } from "../cronjobs/puzzle/puzzle";
import { quiz } from "../cronjobs/quiz/quiz";
import { sentenceOfTheDay } from "../cronjobs/sentenceOfTheDay/sentenceOfTheDay";
import { initiateScraping } from "./initiateScraping";

const cron = require("node-cron");

export const cronJob = () => {
  cron.schedule("0 0 1 * * *", async function () {
    console.log("running a task at 1st hour exactly");
    await sentenceOfTheDay();
  });

  cron.schedule("0 0 2 * * *", async function () {
    console.log("running a task at 2nd hour exactly");
    await quiz();
  });

  cron.schedule("0 0 3 * * *", async function () {
    console.log("running a task at 3rd hour exactly");
    await puzzle();
  });

  cron.schedule("0 0 4 * * *", async function () {
    console.log("running a task at 4th hour exactly");
    await codingChallenge();
  });

  cron.schedule("0 0 5 * * *", async function () {
    console.log("running a task at 5th hour exactly");
    initiateScraping();
  });
};
