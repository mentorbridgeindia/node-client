import { fetchResponse } from "./fetchResponse";

export const getMethod = async (app, path, route) => {
  app.get(path, (req, res) => {
    return fetchResponse(req, route, res);
  });
};
