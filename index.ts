const express = require("express");
const app = express();
import bodyParser from "body-parser";
import { setupEmailRoutes } from "./backend/Email/sendEmail";
import { cronJob } from "./backend/Scrap/cronJob";
import scrapeMedium from "./backend/Scrap/scrapMedium";

app.use(bodyParser.json());
setupEmailRoutes(app);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("client/public"));

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "client/public/index.html"));
  res.send("Hello world!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
  scrapeMedium("https://medium.com/tag/personal-development");
  cronJob();
});
