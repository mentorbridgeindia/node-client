const express = require("express");
const app = express();
import bodyParser from "body-parser";
import { setupEmailRoutes } from "./backend/Email/sendEmail";
import { setupAddRoute } from "./backend/Routes/addRoute";
import { setupDynamicRoutes } from "./backend/Routes/dynamicRoutes";
import { cronJob } from "./backend/Scrap/cronJob";
import { initiateScraping } from "./backend/Scrap/initiateScraping";
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
app.use(bodyParser.json());
setupEmailRoutes(app);
const swaggerDocument = require("./swagger.json");
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("client/public"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "client/public/index.html"));
  res.send("Hello nodejs !");
});

setupEmailRoutes(app);

// setupDynamicRoutes(app);
// setupAddRoute(app);
// setupDefaultRoute(app);

app.listen(4444, () => {
  console.log("Server is running on port 4444");
  // scrapeMedium("https://medium.com/tag/personal-development");
  // cronJob();
  // initiateScraping();
});


