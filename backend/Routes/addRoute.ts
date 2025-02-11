import { Express, Request, Response } from "express";
import { setupDynamicRoutes } from "./dynamicRoutes";

export const setupAddRoute = (app: Express) => {
  app.post("/api/update-route", (req: Request, res: Response) => {
    console.log("Updating routes");
    setupDynamicRoutes(app);

    res.send({ message: "Route added successfully!" });
  });
};
