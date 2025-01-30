import { type } from "os";
import { callAi } from "../Gemini/callAi";
import { getResponseFromAI } from "../utils/getResponseFromAI";

export const deleteMethod = (app, path, response) => {
  app.delete(path, (req, res) => {
    console.log("deleteMethod", path, response);
    // TODO: Fetch response model format from Mongo DB (ex: UserDetails, BusRoute)
    // TODO: Call AI to get response with the data structure
    // TODO: Return response
    // res.json(response);
    const prompt  = getResponseFromAI("list",2,response);
    callAi(prompt).then(function (apiResponse) {
      const text = apiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text?.replaceAll('```json', '').replaceAll('```', '');
      res.json(JSON.parse(text));
    })
    .catch(function (error) {
      console.log(error);
    });
      });
    };
