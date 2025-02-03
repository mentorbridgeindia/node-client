import mongoose, { Model } from "mongoose";

export interface IMockApiEntity {
  id: string;
  name: string;
  applicationId: string;
  applicationPath: string;
  method: string;
  responseStatusCodes: string[];
  defaultResponseStatusCode: string;
  url: string;
}

const mockApiSchema = new mongoose.Schema<IMockApiEntity>(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    applicationId: { type: String, required: true },
    applicationPath: { type: String, required: true },
    method: { type: String, required: true },
    responseStatusCodes: { type: [String] },
    defaultResponseStatusCode: { type: String },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

export const MockApi: Model<IMockApiEntity> = mongoose.model<IMockApiEntity>(
  "MockApi",
  mockApiSchema,
  "MockAPI"
);
