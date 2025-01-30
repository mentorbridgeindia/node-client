import { fetchResponse } from "./fetchResponse";

export const getMethod = async (app, path, route) => {
  app.get(path, (req, res) => {
    console.log("getMethod", path, route);
    return fetchResponse(req, route, res);
  });
};