import { fetchResponse } from "./fetchResponse";

export const postMethod = (app, path, route) => {
  app.post(path, (req, res) => {
    return fetchResponse(req, route, res);
  });
};
