const express = require("express");
const app = express();
import bodyParser from "body-parser";
import { setupEmailRoutes } from "./backend/Email/sendEmail";


app.use(bodyParser.json());
setupEmailRoutes(app);

app.get("/getCountries", function (req, res) {
  res.send([
    {
      id: 1,
      name: "India", // get from OPEN AI API
    },
    {
      id: 2,
      name: "USA",
    },
    {
      id: 3,
      name: "Argentina",
    },
  ]);
});

app.post("/create-user", function (req, res) {
  res.send("Hello world!");
});

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("client/public"));

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, "client/public/index.html"));
  res.send("Hello nodejs !");
});



app.listen(3001);
