import { Express } from "express";
import { deleteMethod } from "./deleteMethod";
import { getMethod } from "./getMethod";
import { getRoutes } from "./getRoutes";
import { postMethod } from "./postMethod";
import { putMethod } from "./putMethod";
import { Route } from "./route.types";

export const setupDynamicRoutes = (app: Express) => {
  getRoutes().forEach((route: Route) => {
    const { path, method, response } = route;

    switch (method) {
      case "GET":
        getMethod(app, path, response);
        break;
      case "POST":
        postMethod(app, path, response);
        break;
      case "PUT":
        putMethod(app, path, response);
        break;
      case "DELETE":
        deleteMethod(app, path, response);
        break;
      default:
        console.error(`Unsupported method: ${method}`);
    }
  });
};
