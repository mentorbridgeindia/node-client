import { Express, Request, Response } from "express";

export const setupDefaultRoute = (app: Express) => {
  app.get("/home", (req: Request, res: Response) => {
    res.send("Hello World");
  });
};
