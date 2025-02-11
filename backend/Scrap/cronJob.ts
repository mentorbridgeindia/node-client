import { codingChallenge } from "../cronjobs/codingChallenge/codingChallege";
import { puzzle } from "../cronjobs/puzzle/puzzle";
import { quiz } from "../cronjobs/quiz/quiz";
import { sentenceOfTheDay } from "../cronjobs/sentenceOfTheDay/sentenceOfTheDay";
import { initiateScraping } from "./initiateScraping";

const cron = require("node-cron");

export const cronJob = () => {
  cron.schedule("0 0 11 30 * *", async function () {
    console.log("running a task at 11th hour of 30th day of every month");
    await sentenceOfTheDay();
  });

  cron.schedule("0 0 12 30 * *", async function () {
    console.log("running a task at 12th hour of 30th day of every month");
    await quiz();
  });

  cron.schedule("0 0 13 30 * *", async function () {
    console.log("running a task at 13th hour of 30th day of every month");
    await puzzle();
  });

  cron.schedule("0 0 14 30 * *", async function () {
    console.log("running a task at 14th hour of 30th day of every month");
    await codingChallenge();
  });

  cron.schedule("0 0 15 30 * *", async function () {
    console.log("running a task at 15th hour of 30th day of every month");
    initiateScraping();
  });
};
