import { fetchResponse } from "./fetchResponse";

export const postMethod = (app, path, route) => {
  app.post(path, (req, res) => {
    console.log("postMethod", path, route);
    return fetchResponse(req, route, res);
  });
};