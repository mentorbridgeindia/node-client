import mongoose from "mongoose";

interface DatabaseConfig {
  uri: string;
  options?: mongoose.ConnectOptions;
}

export class DatabaseManager {
  private static instance: DatabaseManager;
  private currentUri: string | null = null;
  private isConnecting: boolean = false;

  private constructor() {}

  public static getInstance(): DatabaseManager {
    if (!DatabaseManager.instance) {
      DatabaseManager.instance = new DatabaseManager();
    }
    return DatabaseManager.instance;
  }

  public async switchDatabase(config: DatabaseConfig): Promise<boolean> {
    if (this.isConnecting) {
      throw new Error("Database switch already in progress");
    }

    try {
      this.isConnecting = true;

      // Validate the connection string
      if (!this.isValidConnectionString(config.uri)) {
        throw new Error("Invalid connection string");
      }

      // Don't switch if it's the same database
      if (this.currentUri === config.uri) {
        console.log("Already connected to this database");
        return true;
      }

      // Close existing connection
      if (mongoose.connection.readyState !== 0) {
        await mongoose.connection.close();
      }

      // Connect to new database with timeout
      await Promise.race([
        mongoose.connect(config.uri, {
          ...config.options,
          serverSelectionTimeoutMS: 5000, // 5 second timeout
        }),
        new Promise((_, reject) =>
          setTimeout(
            () => reject(new Error("Database connection timeout")),
            5000
          )
        ),
      ]);

      this.currentUri = config.uri;
      console.log("Successfully switched to new database");

      return true;
    } catch (error) {
      console.error("Error switching database:", error);

      // Attempt to reconnect to the previous database if available
      if (this.currentUri) {
        try {
          await mongoose.connect(this.currentUri);
          console.log("Rolled back to previous database connection");
        } catch (rollbackError) {
          console.error(
            "Failed to rollback to previous connection:",
            rollbackError
          );
        }
      }

      throw error;
    } finally {
      this.isConnecting = false;
    }
  }

  private isValidConnectionString(uri: string): boolean {
    // Basic validation - you might want to add more checks
    return uri.startsWith("mongodb://") || uri.startsWith("mongodb+srv://");
  }

  public getCurrentUri(): string | null {
    return this.currentUri;
  }

  public async getConnectionStatus(): Promise<{
    connected: boolean;
    currentUri: string | null;
  }> {
    return {
      connected: mongoose.connection.readyState === 1,
      currentUri: this.currentUri,
    };
  }
}
