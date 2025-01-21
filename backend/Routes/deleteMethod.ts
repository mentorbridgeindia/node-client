export const deleteMethod = (app, path, response) => {
  app.delete(path, (req, res) => res.json(response));
};
