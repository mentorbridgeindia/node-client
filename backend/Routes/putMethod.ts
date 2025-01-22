export const putMethod = (app, path, response) => {
  app.put(path, (req, res) => {
    console.log("putMethod", path, response);
    // TODO: Fetch response model format from Mongo DB (ex: UserDetails, BusRoute)
    // TODO: Call AI to get response with the data structure
    // TODO: Return response
    res.json(response);
  });
};
