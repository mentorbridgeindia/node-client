export const postMethod = (app, path, response) => {
  app.post(path, (req, res) => res.json(response));
};
