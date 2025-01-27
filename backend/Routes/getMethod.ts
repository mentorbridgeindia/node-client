import { callAi } from "../Gemini/callAi";
import { getResponseFromAI } from "../utils/getResponseFromAI";

export const getMethod = (app, path, response) => {
  app.get(path, (req, res) => {
    console.log("getMethod", path, response);
    // TODO: Fetch response model format from Mongo DB (ex: UserDetails, BusRoute)
    // TODO: Call AI to get response with the data structure
    // TODO: Return response
    
const prompt  = getResponseFromAI ("list",5, response);
callAi(prompt).then(function (apiResponse) {
  const text = apiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text?.replaceAll('```json', '').replaceAll('```', '');
  res.json(JSON.parse(text));
})
.catch(function (error) {
  console.log(error);
});
  });
};