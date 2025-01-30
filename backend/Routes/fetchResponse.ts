import axios from "axios";
import { GET_MOCK_RESPONSE_URL } from "./constants";

export const fetchResponse = async (req, route, res) => {
  const response = await axios.post(new URL(GET_MOCK_RESPONSE_URL, req.origin).toString(), {
    route: route,
  });
  res.status(response.status).json(response.data);
};
