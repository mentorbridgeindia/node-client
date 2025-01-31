import { fetchResponse } from "./fetchResponse";

export const putMethod = (app, path, route) => {
  app.put(path, (req, res) => {
    console.log("putMethod", path, route);
    return fetchResponse(req, route, res);
  });
};
