import { fetchResponse } from "./fetchResponse";

export const deleteMethod = (app, path, route) => {
  app.delete(path, (req, res) => {
    return fetchResponse(req, route, res);
  });
};
