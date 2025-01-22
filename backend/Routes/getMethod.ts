export const getMethod = (app, path, response) => {
  app.get(path, (req, res) => {
    console.log("getMethod", path, response);
    // TODO: Fetch response model format from Mongo DB (ex: UserDetails, BusRoute)
    // TODO: Call AI to get response with the data structure
    // TODO: Return response
    res.json(response);
  });
};
