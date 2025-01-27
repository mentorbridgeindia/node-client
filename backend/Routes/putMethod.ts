import { type } from "os";
import { getResponseFromAI } from "../utils/getResponseFromAI";
import { count } from "console";
import { callAi } from "../Gemini/callAi";

export const putMethod = (app, path, response) => {
  app.put(path, (req, res) => {
    console.log("putMethod", path, response);
    
    const prompt  = getResponseFromAI("list",10,response);
    callAi(prompt).then(function (apiResponse) {
      const text = apiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text?.replaceAll('```json', '').replaceAll('```', '');
      res.json(JSON.parse(text));
    })
    .catch(function (error) {
      console.log(error);
    });
      });
    };