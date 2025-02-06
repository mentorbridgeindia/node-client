import { DatabaseManager } from "./databaseManager";

const dbManager = DatabaseManager.getInstance();

export const switchDatabase = async (connectionString: string) => {
  try {
    await dbManager.switchDatabase({
      uri: connectionString,
      options: {
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
      },
    });
  } catch (error) {
    console.error("Failed to switch database:", error);
  }
};
