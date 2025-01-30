import { STUBLAB_DB } from "../constants";

import { switchDatabase } from "../Database/switchDatabase";
import { MockApi } from "../Models/MockApi";

export const getRoutes = async () => {
  switchDatabase(STUBLAB_DB);

  const routes = await MockApi.find().lean();
  console.log(routes);
  return routes;
};
