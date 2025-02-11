import axios from "axios";
import { callAi } from "../Gemini/callAi";
import { MODEL_LIST_GEN_PROMPT, MODEL_OBJECT_GEN_PROMPT } from "../constants";
import { GET_MOCK_RESPONSE_URL } from "./constants";

export const fetchResponse = async (req, route, res) => {
  const response = await axios.get(
    GET_MOCK_RESPONSE_URL + "/" + route._id,
    {
      headers: {
        clientId: req.headers.clientid,
      },
    }
  );
  let prompt = "";
  if (response.data?.listCount > 0) {
    prompt = MODEL_LIST_GEN_PROMPT + response.data?.listCount;
  } else {
    prompt = MODEL_OBJECT_GEN_PROMPT;
  }
  if (
    response.data?.responseBodyType === "list" ||
    response.data?.responseBodyType === "object"
  ) {
    const responseData = await callAi(
      prompt,
      JSON.stringify(response.data.responseBodyStructure),
      "application/json"
    );
    res.status(response.status).json(JSON.parse(responseData));
  } else {
    res.status(response.status).json(response.data.responseBody);
  }
};
