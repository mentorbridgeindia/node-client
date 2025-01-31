import mongoose, { Model } from "mongoose";

export interface IMockResponseEntity {
  id: string;
  statusCode: string;
  responseBodyType: string;
  isPrimitiveResponseStatic?: boolean;
  primitiveResponse?: string;
  responseBody?: string;
  listCount?: number;
}

const mockResponseSchema = new mongoose.Schema<IMockResponseEntity>(
  {
    id: { type: String, required: true },
    statusCode: { type: String, required: true },
    responseBodyType: { type: String, required: true },
    isPrimitiveResponseStatic: { type: Boolean, default: false },
    primitiveResponse: { type: String },
    responseBody: { type: String },
    listCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const MockResponse: Model<IMockResponseEntity> =
  mongoose.model<IMockResponseEntity>(
    "MockResponse",
    mockResponseSchema,
    "MockResponse"
  );
