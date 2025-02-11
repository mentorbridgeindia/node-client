import { Express, Request, Response } from "express";
import { setupDynamicRoutes } from "./dynamicRoutes";

export const setupAddRoute = (app: Express) => {
  app.post("/api/update-route", async(req: Request, res: Response) => {
    console.log("Updating routes");
    await setupDynamicRoutes(app);

    res.send({ message: "Route added successfully!" });
  });
};
