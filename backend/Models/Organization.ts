import mongoose, { Model } from "mongoose";

interface IOrganizationEntity {
  id: string;
  dbName: string;
  website: string;
  organizationName: string;
}

const organizationSchema = new mongoose.Schema({
  id: { type: String, required: true },
  dbName: { type: String, required: true },
  website: { type: String, required: true },
  organizationName: { type: String, required: true },
});

export const Organization: Model<IOrganizationEntity> = mongoose.model<IOrganizationEntity>(
  "Organization",
  organizationSchema,
  "Organization"
);
