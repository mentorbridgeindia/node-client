import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import { setupEmailRoutes } from "./backend/Email/sendEmail";
import { setupAddRoute } from "./backend/Routes/addRoute";
import { setupDynamicRoutes } from "./backend/Routes/dynamicRoutes";

const app = express();
const PORT = Number(process.env.PORT) || 10000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("client/public"));
setupEmailRoutes(app);

const logRequestDetails = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
};

app.use(logRequestDetails);

app.get("/", (req, res) => {
  res.send("Hello nodejs !");
});

setupDynamicRoutes(app);
setupAddRoute(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
