import axios from "axios";
import { GET_MOCK_RESPONSE_URL } from "../constants";

export const fetchResponse = async (req, route, res) => {
  console.log("hitting api to fetch mock response");
  const clientId = req.headers.clientid ?? req.headers["x-client-id"];
  const response = await axios.get(GET_MOCK_RESPONSE_URL + "/" + route._id, {
    headers: {
      clientId: clientId,
      "X-Client-Id": clientId,
    },
  });
  console.log("response", response.data);
  res.status(response.status).json(response.data.responseBody);
};
