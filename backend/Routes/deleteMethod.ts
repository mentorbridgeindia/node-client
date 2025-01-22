export const deleteMethod = (app, path, response) => {
  app.delete(path, (req, res) => {
    console.log("deleteMethod", path, response);
    // TODO: Fetch response model format from Mongo DB (ex: UserDetails, BusRoute)
    // TODO: Call AI to get response with the data structure
    // TODO: Return response
    res.json(response);
  });
};
