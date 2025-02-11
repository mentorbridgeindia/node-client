import { fetchResponse } from "./fetchResponse";

export const putMethod = (app, path, route) => {
  app.put(path, (req, res) => {
    return fetchResponse(req, route, res);
  });
};
