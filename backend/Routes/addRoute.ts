import { Express, Request, Response } from "express";
import { setupDynamicRoutes } from "./dynamicRoutes";
import { Route } from "./route.types";

export const setupUpdateRoute = (app: Express) => {
  app.post("/api/update-route", (req: Request, res: Response) => {

    setupDynamicRoutes(app);

    res.send({ message: "Route updated successfully!" });
  });
};
