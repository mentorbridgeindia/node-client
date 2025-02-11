import { STUBLAB_DB, STUBLAB_DB_NAME, STUBLAB_DB_OPTIONS } from "../constants";
import { switchDatabase } from "../Database/switchDatabase";
import { MockApi } from "../Models/MockApi";
import { Organization } from "../Models/Organization";

export const getRoutes = async (): Promise<any[]> => {
  const routes: any[] = [];
  await switchDatabase(STUBLAB_DB + STUBLAB_DB_NAME + STUBLAB_DB_OPTIONS);

  const organizations = await Organization.find().lean();
  for (const organization of organizations) {
    if (organization.dbName) {
      await switchDatabase(
        STUBLAB_DB + organization.dbName + STUBLAB_DB_OPTIONS
      );
      const apiRoutes = await MockApi.find().lean();
      routes.push(...apiRoutes);
    }
  }

  return routes;
};
