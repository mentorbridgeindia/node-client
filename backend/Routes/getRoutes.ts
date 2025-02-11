import { STUBLAB_DB, STUBLAB_DB_NAME, STUBLAB_DB_OPTIONS } from "../constants";

import { switchDatabase } from "../Database/switchDatabase";
import { MockApi } from "../Models/MockApi";
import { Organization } from "../Models/Organization";

export const getRoutes = async () => {
  let routes: any[] = [];
  switchDatabase(STUBLAB_DB + STUBLAB_DB_NAME + STUBLAB_DB_OPTIONS);

  const organizations = await Organization.find().lean();

  for (const organization of organizations) {
    switchDatabase(STUBLAB_DB + organization.dbName + STUBLAB_DB_OPTIONS);
    const organizationRoutes = await MockApi.find().lean();
    routes = [...routes, ...organizationRoutes];
  }
  return routes;
};
