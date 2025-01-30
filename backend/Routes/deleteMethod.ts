import { fetchResponse } from "./fetchResponse";

export const deleteMethod = (app, path, route) => {
  app.delete(path, (req, res) => {
    console.log("deleteMethod", path, route);
    return fetchResponse(req, route, res);
  });
};
