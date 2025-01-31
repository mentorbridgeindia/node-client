import { Express } from "express";
import { deleteMethod } from "./deleteMethod";
import { getMethod } from "./getMethod";
import { getRoutes } from "./getRoutes";
import { postMethod } from "./postMethod";
import { putMethod } from "./putMethod";
import { IMockApiEntity } from "../Models/MockApi";

export const setupDynamicRoutes = async (app: Express) => {
  const routes = await getRoutes();
  routes.forEach((route: IMockApiEntity) => {
    const { applicationPath, url, method } = route;

    const path = `${applicationPath}${url}`;

    switch (method) {
      case "GET":
        getMethod(app, path, route);
        break;
      case "POST":
        postMethod(app, path, route);
        break;
      case "PUT":
        putMethod(app, path, route);
        break;
      case "DELETE":
        deleteMethod(app, path, route);
        break;
      default:
        console.error(`Unsupported method: ${method}`);
    }
  });
};
