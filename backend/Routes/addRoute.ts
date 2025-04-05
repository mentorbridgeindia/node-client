import { Express, Request, Response } from "express";
import { setupDynamicRoutes } from "./dynamicRoutes";

export const setupAddRoute = (app: Express) => {
  app.get("/update-route", async (req: Request, res: Response) => {
    console.log("Updating routes");
    await setupDynamicRoutes(app);

    res.send({ message: "Routes updated successfully!" });
  });
};
