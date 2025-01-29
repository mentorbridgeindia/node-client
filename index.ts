const express = require("express");
const app = express();
import bodyParser from "body-parser";
import { setupEmailRoutes } from "./backend/Email/sendEmail";
import { setupAddRoute } from "./backend/Routes/addRoute";
import { setupDynamicRoutes } from "./backend/Routes/dynamicRoutes";
import { cronJob } from "./backend/Scrap/cronJob";
import { initiateScraping } from "./backend/Scrap/initiateScraping";

app.use(bodyParser.json());
setupEmailRoutes(app);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("client/public"));

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "client/public/index.html"));
  res.send("Hello world!");
});

setupDynamicRoutes(app);
setupAddRoute(app);
// setupDefaultRoute(app);

app.listen(4444, () => {
  console.log("Server is running on port 4444");
  // scrapeMedium("https://medium.com/tag/personal-development");
  cronJob();
  initiateScraping();
});
