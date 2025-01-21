export const putMethod = (app, path, response) => {
  app.put(path, (req, res) => res.json(response));
};
