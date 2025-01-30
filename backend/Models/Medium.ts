import mongoose, { Document, Model } from "mongoose";

export interface IMedium extends Document {
  title: string;
  content: string;
  image: string;
  createdAt: Date;
}

const mediumSchema = new mongoose.Schema<IMedium>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export const Medium: Model<IMedium> = mongoose.model<IMedium>(
  "Medium",
  mediumSchema,
  "medium"
);
