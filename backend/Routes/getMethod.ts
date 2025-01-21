export const getMethod = (app, path, response) => {
  app.get(path, (req, res) => res.json(response));
};
