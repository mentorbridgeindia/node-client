import { MongoTopologyClosedError } from "mongodb";
import { STUBLAB_DB, STUBLAB_DB_NAME, STUBLAB_DB_OPTIONS } from "../constants";
import { switchDatabase } from "../Database/switchDatabase";
import { MockApi } from "../Models/MockApi";
import { Organization } from "../Models/Organization";

export const getRoutes = async (): Promise<any[]> => {
  const routes: any[] = [];

  try {
    // Connect to main database
    await switchDatabase(STUBLAB_DB + STUBLAB_DB_NAME + STUBLAB_DB_OPTIONS);
    const organizations = await Organization.find().lean();

    // Process each organization's routes
    for (const organization of organizations) {
      if (organization.dbName) {
        await switchDatabase(
          STUBLAB_DB + organization.dbName + STUBLAB_DB_OPTIONS
        );
        const apiRoutes = await MockApi.find().lean();
        routes.push(...apiRoutes);
      }
    }
  } catch (error) {
    if (error instanceof MongoTopologyClosedError) {
      console.error(
        "Attempted to check out a connection from closed connection pool"
      );
    } else {
      console.error(error);
    }
  }

  return routes;
};
