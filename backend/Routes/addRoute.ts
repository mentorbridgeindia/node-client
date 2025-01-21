import { Express, Request, Response } from "express";
import { setupDynamicRoutes } from "./dynamicRoutes";
import { Route } from "./route.types";

export const setupAddRoute = (app: Express) => {
  app.post("/api/add-route", (req: Request, res: Response) => {
    const newRoute = req.body as Route;

    // TODO: Validate the new route
    // TODO: Add the newRoute to the routesConfig in Mongo DB
    // newRoute

    setupDynamicRoutes(app);

    res.send({ message: "Route added successfully!" });
  });
};
