const express = require("express");
const app = express();
import bodyParser from "body-parser";
import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { setupEmailRoutes } from "./backend/Email/sendEmail";
import { setupAddRoute } from "./backend/Routes/addRoute";
import { cronJob } from "./backend/Scrap/cronJob";

const PORT = Number(process.env.PORT) || 10000;

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

setupAddRoute(app);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
  cronJob();
});
