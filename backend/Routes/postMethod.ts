export const postMethod = (app, path, response) => {
  app.post(path, (req, res) => {
    console.log("postMethod", path, response);
    // TODO: Fetch response model format from Mongo DB (ex: UserDetails, BusRoute)
    // TODO: Call AI to get response with the data structure
    // TODO: Return response
    res.json(response);
  });
};
