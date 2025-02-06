const express = require("express");
const app = express();
import bodyParser from "body-parser";
import { NextFunction, Request, Response } from "express";
import { setupEmailRoutes } from "./backend/Email/sendEmail";
import { setupAddRoute } from "./backend/Routes/addRoute";
import { setupDynamicRoutes } from "./backend/Routes/dynamicRoutes";
import { cronJob } from "./backend/Scrap/cronJob";
import "dotenv/config";

const PORT = Number(process.env.PORT) || 1000;

app.use(bodyParser.json());
setupEmailRoutes(app);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("client/public"));

const middleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
};

app.use(middleware);

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "client/public/index.html"));
  res.send("Hello nodejs !");
});

setupDynamicRoutes(app);
setupAddRoute(app);
// setupDefaultRoute(app);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  // scrapeMedium("https://medium.com/tag/personal-development");
  cronJob();
  // initiateScraping();
});
